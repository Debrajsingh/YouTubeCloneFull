import React, { useState } from "react";
import "./video.css";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { Link } from "react-router-dom";

const Video = () => {
  const [inputField, setInputField] = useState("")
  console.log(inputField)
  return (
    <div className="video">
      <div className="videoPostSection">
        <div className="video_youtube">
          <video width="400" controls autoPlay className="video_youtube_video">
            <source
              src={"https://www.w3schools.com/html/mov_bbb.mp4"}
              type="video/mp4"
            />
            <source
              src={"https://www.w3schools.com/html/mov_bbb.mp4"}
              type="video/webm"
            />
            Your browser does not support HTML video.
          </video>
        </div>
        <div className="video_youtubeAbout">
          <div className="video_uTubeTitle">
            {"I'm Confused... SmackDown In France Was GREAT or TRASH?"}
          </div>
          <div className="youtube_video_ProfileBlock">
            <div className="youtube_video_ProfileBlock_left">
              <Link to={'/user/2001'} className="youtube_video_ProfileBlock_left_img">
                <img
                  src={
                    "https://yt3.googleusercontent.com/NO-xhKqiIdN23_EwT37Qq7fvbc6YPdRoRCs2wM5ksQaGX5nrCYjtBIhlpLQAS-dq3AhrzyzHeAc=s160-c-k-c0x00ffffff-no-rj"
                  }
                  alt=""
                  className="youtube_video_ProfileBlock_left_image"
                />
              </Link>
              <Link to={'/user/2001'} className="youtubeVideo_subsView">
                <div className="youtubePostProfileName">{"TheGreatOne"}</div>
                <div className="youtubePostProfileSubs">
                  {"5.07M subscribers"}
                </div>
              </Link>
              <div className="subscribeBtnYoutube">Subscribe</div>
            </div>

            <div className="youtube_video_likeBlock">
              <div className="youtube_video_likeBlock_Like">
                <ThumbUpAltOutlinedIcon />
                <div className="youtube_video_likeBlock_NoOfLike">{4}</div>
              </div>
              <div className="youtubeVideoDivider"></div>
              <div className="youtube_video_likeBlock_Like">
                <ThumbDownAltOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="youtube_video_About">
            <div>2025-39-09</div>
            <div>
              I'm Confused... SmackDown In France Was GREAT or TRASH? | WWE
              Friday Night SmackDown Review.
            </div>
          </div>
          <div className="youtubeCommentSection">
            <div className="youtubeCommentSectionTitle">2 Comments</div>
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
                  value={inputField}
                  onChange={(e)=>{setInputField(e.target.value)}}
                />
                <div className="cancelSubmitComment">
                  <div className="cancelComment">Cancel</div>
                  <div className="cancelComment">Comment</div>
                </div>
              </div>
            </div>
            <div className="youtubeOthersComments">
              <div className="youtubeSelfComment">
                <img
                  src="https://cdn.vectorstock.com/i/500p/54/69/male-user-icon-vector-8865469.jpg"
                  className="video_youtubeSelfCommentProfile" alt=""
                />
                <div className="others_commentSection">
                  <div className="others_commentSectionHeader">
                    <div className="channelName_comment">User1</div>
                    <div className="commentTimmingOthers">2025-31-09</div>
                  </div>
                  <div className="othersCommentSectionComment">
                    This is Awsome!!!!
                  </div>
                </div>
              </div>
              <div className="youtubeSelfComment">
                <img
                  src="https://cdn.vectorstock.com/i/500p/54/69/male-user-icon-vector-8865469.jpg"
                  className="video_youtubeSelfCommentProfile" alt=""
                />
                <div className="others_commentSection">
                  <div className="others_commentSectionHeader">
                    <div className="channelName_comment">User1</div>
                    <div className="commentTimmingOthers">2025-31-09</div>
                  </div>
                  <div className="othersCommentSectionComment">
                    This is Awsome!!!!
                  </div>
                </div>
              </div>
              <div className="youtubeSelfComment">
                <img
                  src="https://cdn.vectorstock.com/i/500p/54/69/male-user-icon-vector-8865469.jpg"
                  className="video_youtubeSelfCommentProfile" alt=""
                />
                <div className="others_commentSection">
                  <div className="others_commentSectionHeader">
                    <div className="channelName_comment">User1</div>
                    <div className="commentTimmingOthers">2025-31-09</div>
                  </div>
                  <div className="othersCommentSectionComment">
                    This is Awsome!!!!
                  </div>
                </div>
              </div>
              <div className="youtubeSelfComment">
                <img
                  src="https://cdn.vectorstock.com/i/500p/54/69/male-user-icon-vector-8865469.jpg"
                  className="video_youtubeSelfCommentProfile" alt=""
                />
                <div className="others_commentSection">
                  <div className="others_commentSectionHeader">
                    <div className="channelName_comment">User1</div>
                    <div className="commentTimmingOthers">2025-31-09</div>
                  </div>
                  <div className="othersCommentSectionComment">
                    This is Awsome!!!!
                  </div>
                </div>
              </div>
              <div className="youtubeSelfComment">
                <img
                  src="https://cdn.vectorstock.com/i/500p/54/69/male-user-icon-vector-8865469.jpg"
                  className="video_youtubeSelfCommentProfile" alt=""
                />
                <div className="others_commentSection">
                  <div className="others_commentSectionHeader">
                    <div className="channelName_comment">User1</div>
                    <div className="commentTimmingOthers">2025-31-09</div>
                  </div>
                  <div className="othersCommentSectionComment">
                    This is Awsome!!!!
                  </div>
                </div>
              </div>
              <div className="youtubeSelfComment">
                <img
                  src="https://cdn.vectorstock.com/i/500p/54/69/male-user-icon-vector-8865469.jpg"
                  className="video_youtubeSelfCommentProfile" alt=""
                />
                <div className="others_commentSection">
                  <div className="others_commentSectionHeader">
                    <div className="channelName_comment">User1</div>
                    <div className="commentTimmingOthers">2025-31-09</div>
                  </div>
                  <div className="othersCommentSectionComment">
                    This is Awsome!!!!
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default Video;
