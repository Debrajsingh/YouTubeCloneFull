import React, { useState } from "react";
import "./login.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const Login = ({ setLoginModel }) => {
    const [loginField,setLoginField] = useState({"userName":"","password":""});
    console.log(loginField)
    const handleOnChangeInput = (event,name)=>{
        setLoginField({
            ...loginField,[name]:event.target.value
        })
    }
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
              onChange={(e)=>handleOnChangeInput(e,"userName")}
            />
          </div>
          <div className="userNameLogin">
            <input
              type="password"
              placeholder="Password"
              className="uploadeFormInputs"
              value={loginField.password}
              onChange={(e)=>handleOnChangeInput(e,"password")}
            />
          </div>
        </div>
        <div className="uploadeBtns">
          <div className="uploadeBtn-form">Login</div>
          <Link
            to={"/signup"}
            className="uploadeBtn-form"
            onClick={() => setLoginModel()}
          >
            Signup
          </Link>
          <div className="uploadeBtn-form" onClick={() => setLoginModel()}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
