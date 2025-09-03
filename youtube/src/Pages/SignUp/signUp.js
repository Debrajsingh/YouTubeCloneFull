import React,{useState} from "react";
import "./signUp.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const[uploadedImageUrl,setUploadedImageUrl] = useState("https://cdn.vectorstock.com/i/500p/54/69/male-user-icon-vector-8865469.jpg");
  const [signUpField,setSignUpField] = useState({"channelName":"","userName":"","password":"","about":"","profilePic":uploadedImageUrl});
  const handleInputField = (event,name)=>{
        setSignUpField({
            ...signUpField,[name]:event.target.value
        })
  }

  console.log(signUpField)

  const uploadeImage= async(e)=>{
    const files =e.target.files;
    const data = new FormData();
    data.append('file',files[0]);
    //youtube_clone
    data.append('upload_preset','youtube_clone');
    try {
      // cloud_name=digi9wabj
      const response = await axios.post("https://api.cloudinary.com/v1_1/digi9wabj/image/upload",data)
      const imageUrl = response.data.url;
      setUploadedImageUrl(imageUrl);
      setSignUpField({
            ...signUpField,"profilePic":imageUrl
        })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="signUp">
      <div className="signUp_card">
        <div className="signUp_title">
          <YouTubeIcon
            sx={{ fontSize: "54px" }}
            className="login_youtubeImage"
          />
          SignUp
        </div>

        <div className="signUp_Inputs">
          <input
            type="text"
            className="signUp_Inputs_inp"
            placeholder="Channel Name"
            value={signUpField.channelName}
            onChange={(e)=>handleInputField(e,"channelName")}
          />
          <input
            type="text"
            className="signUp_Inputs_inp"
            placeholder="User Name"
            value={signUpField.userName}
            onChange={(e)=>handleInputField(e,"userName")}
          />
          <input
            type="password"
            className="signUp_Inputs_inp"
            placeholder="Password"
            value={signUpField.password}
            onChange={(e)=>handleInputField(e,"password")}
          />
          <input
            type="text"
            className="signUp_Inputs_inp"
            placeholder="About Your Channel"
            value={signUpField.about}
            onChange={(e)=>handleInputField(e,"about")}
          />

          <div className="image_uploade_signup">
            <input type="file" onChange={(e)=>uploadeImage(e)} accept="photo/*" />

            <div className="image_uploade_signup_div">
              <img
                src={uploadedImageUrl}
                alt=""
                className="image_default_signup"
              />
            </div>
          </div>

          <div className="signUpBtns">
            <div className="signUpBtn">SignUp</div>
            <Link to={"/"} className="signUpBtn">
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
