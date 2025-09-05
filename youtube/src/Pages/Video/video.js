import React, {useEffect, useState} from 'react'
import './video.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from "axios";
import {toast,ToastContainer} from 'react-toastify'
const Video = () => {
    const [message, setMessage] = useState("");
    const [data,setData] = useState(null);
    const [videoUrl, setVideoURL] = useState("");
    const {id} = useParams();
    const [comments, setComments] = useState([]);

   const fetchVedioById = async () => {
        await axios.get(`http://localhost:4000/api/getVideoById/${id}`).then((response) => {
            console.log(response.data.video);
            setData(response.data.video)
            setVideoURL(response.data.video.videoLink)
        }).catch(err => {
            console.log(err);
        })
    }

    const getCommentByVideoId = async () => {
        await axios.get(`http://localhost:4000/commentApi/comment/${id}`).then((response) => {
            console.log(response);
            setComments(response.data.comments)
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        fetchVedioById();
        getCommentByVideoId();
    }, []);
    
    const handleComment = async()=>{
        const body = {
            "message":message,
            "video":id
        }
        await axios.post('http://localhost:4000/commentApi/comment',body, { withCredentials: true }).then((resp)=>{
            console.log(resp)
            const newComment = resp.data.comment;
            setComments([newComment,...comments]);
            setMessage("")
        }).catch(err=>{
            toast.error("Please Login First to comment")
        })
    }
  return (
    <div className="video">
      <div className="videoPostSection">
        <div className="video_youtube">
          {data && <video width="400" controls autoPlay className="video_youtube_video">
            <source
              src={videoUrl}
              type="video/mp4"
            />
            <source
              src={videoUrl}
              type="video/webm"
            />
            Your browser does not support HTML video.
          </video>}
          
        </div>
        <div className="video_youtubeAbout">
          <div className="video_uTubeTitle">
            {data?.title}
          </div>
          <div className="youtube_video_ProfileBlock">
            <div className="youtube_video_ProfileBlock_left">
              <Link to={`/user/${data?.user?._id}`}  className="youtube_video_ProfileBlock_left_img">
                <img
                  src={
                    data?.user?.profilePic
                  }
                  alt=""
                  className="youtube_video_ProfileBlock_left_image"
                />
              </Link>
              <Link to={`/user/${data?.user?._id}`} className="youtubeVideo_subsView">
                <div className="youtubePostProfileName">{data?.user?.channelName}</div>
                <div className="youtubePostProfileSubs">
                  {data?.user?.createdAt.slice(0, 10)}
                </div>
              </Link>
              <Link to={`/user/${data?.user?._id}`} className="subscribeBtnYoutube">Subscribe</Link>
            </div>

            <div className="youtube_video_likeBlock">
              <div className="youtube_video_likeBlock_Like">
                <ThumbUpOutlinedIcon />
                <div className="youtube_video_likeBlock_NoOfLike">{data?.like}</div>
              </div>
              <div className="youtubeVideoDivider"></div>
              <div className="youtube_video_likeBlock_Like">
                <ThumbDownAltOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="youtube_video_About">
            <div>{data?.createdAt.slice(0, 10)}</div>
            <div>
              {data?.description}
            </div>
          </div>
          <div className="youtubeCommentSection">
            <div className="youtubeCommentSectionTitle">{comments.length} Comments</div>
            <div className="youtubeSelfComment">
              <img
                src="https://cdn.vectorstock.com/i/500p/54/69/male-user-icon-vector-8865469.jpg"
                className="video_youtubeSelfCommentProfile" alt=""
              />
              <div className="addAComment">
                <input
                  type="text"
                  placeholder="Add a comment"
                  className="addACommentInput"
                  value={message}
                  onChange={(e)=>{setMessage(e.target.value)}}
                />
                <div className="cancelSubmitComment">
                  <div className="cancelComment">Cancel</div>
                  <div className="cancelComment" onClick={handleComment}>Comment</div>
                </div>
              </div>
            </div>
            <div className="youtubeOthersComments">

              {
                comments.map((item,index)=>{
                  return(
              <div className="youtubeSelfComment">
                <img
                  src={item?.user?.profilePic}
                  className="video_youtubeSelfCommentProfile" alt=""
                />
                <div className="others_commentSection">
                  <div className="others_commentSectionHeader">
                    <div className="channelName_comment">{item?.user?.channelName}</div>
                    <div className="commentTimmingOthers">{item?.createdAt.slice(0,10)}</div>
                  </div>
                  <div className="othersCommentSectionComment">
                   {item?.message}
                  </div>
                </div>
              </div>
                  );
                })
              }

            </div>
          </div>
        </div>
      </div>

      <div className="videoSuggestions">
        <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
        <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
        <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
        <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
        <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
         <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
        <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
        <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
        <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
        <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
         <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
        <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
        <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
        <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
        <div className="videoSuggestionsblock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/eu6BZ3XuIEg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTm0LsD0L6hDjUVsaWb5Xhcv6YeQ" alt="" className="video_suuggestion_thumbnail_img" />
            </div>
            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Our Most Intense Pokemon Battle Ever (BUBL Week 5)</div>
                <div className="video_suggestions_About_Profile">Play More</div>
                <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
            </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Video;
