import React, { useState } from "react";
import "./login.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Login = ({ setLoginModel }) => {
  const [loginField, setLoginField] = useState({ userName: "", password: "" });
  
   const [loader,setLoader] = useState(false)

  const handleOnChangeInput = (event, name) => {
    setLoginField({
      ...loginField,
      [name]: event.target.value,
    });
  };

  const handleLoginFun = async () => {
        setLoader(true)
    axios
      .post(
        "http://localhost:4000/auth/login",
        loginField ,{ withCredentials: true}
      )
      .then((resp) => {
            setLoader(false)
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("userId", resp.data.user._id);
        localStorage.setItem("userProfilePic", resp.data.user.profilePic);
        window.location.reload();
      })
      .catch((err) => {
        toast.error("Invalid Credentials");
        console.log(err);
        setLoader(false)
      });
  };

  return (
    <div className="login">
      <div className="login_card">
        <div className="titleCard_login">
          <YouTubeIcon
            sx={{ fontSize: "54px" }}
            className="login_youtubeImage"
          />
          Login
        </div>

        

        <div className="uploadeForm">
          <div className="userNameLogin">
            <input
              type="text"
              placeholder="UserName"
              className="uploadeFormInputs"
              value={loginField.userName}
              onChange={(e) => handleOnChangeInput(e, "userName")}
            />
          </div>
          <div className="userNameLogin">
            <input
              type="password"
              placeholder="Password"
              className="uploadeFormInputs"
              value={loginField.password}
              onChange={(e) => handleOnChangeInput(e, "password")}
            />
          </div>
        </div>
        <div className="uploadeBtns">
          <div className="uploadeBtn-form" onClick={handleLoginFun}>
            Login
          </div>
          <Link
            to={`/signup`}
            className="uploadeBtn-form"
            onClick={() => setLoginModel()}>
            Signup
          </Link>
          <div className="uploadeBtn-form" onClick={() => setLoginModel()}>
            Cancel
          </div>

          
        </div>
       { loader && <Box sx={{ width: "100%", marginTop:"30px" } }>
            <LinearProgress />
          </Box>}
      </div>
       <ToastContainer />
    </div>
  );
};

export default Login;
