import React, { useState,useEffect } from "react";
import "./videoUploade.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const VideoUploade = () => {
  const [inputField, setInputField] = useState({
    title: "",
    description: "",
    videoLink: "",
    thumbnail: "",
    videoType: "",
  });
  const [loader,setLoader] = useState(false);
  const navigate = useNavigate()

  const handleInputField = (event, name) => {
    setInputField({
      ...inputField,
      [name]: event.target.value,
    });
  };

  const uploadeImage = async (e, type) => {
    setLoader(true)
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    //youtube_clone
    data.append("upload_preset", "youtube_clone");
    try {
      // cloud_name=digi9wabj
      
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/digi9wabj/${type}/upload`,
        data
      );
      const Url = response.data.url;
      setLoader(false)

      let val = type === "image" ? "thumbnail" : "videoLink";

      setInputField({
        ...inputField,
        [val]: Url,
      });
    } catch (err) {
      setLoader(false)
      console.log(err);
    }
  };
  console.log(inputField);
  useEffect(()=>{
    let isLogin =localStorage.getItem("userId")
    if(isLogin===null){
      navigate('/')
    }
  },[])

  const handleSubmitFunc = async()=>{
    setLoader(true)
       await axios.post('http://localhost:4000/api/video',inputField,{withCredentials:true}).then((resp)=>{
        console.log(resp)
        setLoader(false)
        navigate('/')
       }).catch(err=>{
        console.log(err)
        setLoader(false)
       })
      }

  return (
    <div className="videoUploade">
      <div className="uploadeBox">
        <div className="uploadeVideoTitle">
          <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
          Upload Video
        </div>
        <div className="uploadeForm">
          <input
            type="text"
            placeholder="Title of Video"
            className="uploadeFormInputs"
            value={inputField.title}
            onChange={(e) => handleInputField(e, "title")}
          />
          <input
            type="text"
            placeholder="Description"
            className="uploadeFormInputs"
            value={inputField.description}
            onChange={(e) => handleInputField(e, "description")}
          />
          <input
            type="text"
            placeholder="Category"
            className="uploadeFormInputs"
            value={inputField.videoType}
            onChange={(e) => handleInputField(e, "videoType")}
          />
          <div>
            Thumbnail{" "}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => uploadeImage(e, "image")}
            />
          </div>
          <div>
            Video{" "}
            <input
              type="file"
              accept="video/mp4, video/webm, video/*"
              onChange={(e) => uploadeImage(e, "video")}
            />
          </div>

          {
          loader && <Box sx={{ display: "flex" }}>
                        <CircularProgress />
                    </Box>
        }
        
        </div>

        


        <div className="uploadeBtns">
          <div className="uploadeBtn-form" onClick={handleSubmitFunc}>Uploade</div>
          <Link to={"/"} className="uploadeBtn-form">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoUploade;
