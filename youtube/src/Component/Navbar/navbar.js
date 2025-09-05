import React,{useState,useEffect} from "react";
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link,useNavigate } from 'react-router-dom' 
import Login from "../Login/login";


//import Login from '../Login/login';
import axios from 'axios';

const Navbar = ({setSideNavbarFunc, sideNavbar}) => {
    const [userPic,setUserPic] = useState("https://cdn.vectorstock.com/i/500p/54/69/male-user-icon-vector-8865469.jpg")
    const [navbarModel,setNavbarModel] = useState(false);
    const [login,setLogin] =useState(false);
    const [isLogedIn,setIsLogedIn] = useState(false)
    const navigate = useNavigate();

    const handleClickModel =()=>{
        setNavbarModel(prev=>!prev);
    }
    const sideNavbaeFunc =()=>{
        setSideNavbarFunc(!sideNavbar);
    }
    const handleprofile =()=>{
        let userId = localStorage.getItem("userId")
        navigate(`/user/${userId}`);
        setNavbarModel(false);
    }
    const setLoginModel=()=>{
        setLogin(false);
    }
    const onClickOfPopUpOption = (button)=>{
        setNavbarModel(false);
        if(button==="login"){
            setLogin(true);
        }else{
            localStorage.clear();
      getLogoutFun();
      setTimeout(() => {
        navigate('/')
        window.location.reload();
window.location.reload();
    }, 1000);
        }
    }

   const getLogoutFun = async()=>{
    axios.post("http://localhost:4000/auth/logout",{},{ withCredentials: true}).then((res)=>{
      console.log("Logout ")
    }).catch(err=>{
      console.log(err)
    })
  }

    useEffect(()=>{
    let userProfilePic = localStorage.getItem("userProfilePic");
    setIsLogedIn(localStorage.getItem("userId")!==null?true:false);
    if(userProfilePic!==null){
      setUserPic(userProfilePic)
    }

  },[])

  return (
  <div className="navbar">

    <div className="navbar-left">
        <div className="navbarHamberger" onClick={sideNavbaeFunc}>
            <MenuIcon sx={{ color: "white" }} />
        </div>

        <Link to={'/'} className="navbar_youtubeImg">
            <YouTubeIcon sx={{fontSize:"34px"}} className="navbar_youtubeImage" />
            <div className="navbar_utubeTitle">YouTube</div>
        </Link>

    </div>

    <div className="navbar-middle">
        <div className="navbar_searchBox">
            <input type="text" placeholder="Search" className="navbar_searchBoxInput"/> 
            <div className="navbar_searchIconBox">
                <SearchIcon sx={{fontSize:"28px",color:"white"}}/>
            </div>
        </div>
        <div className="navbar_mic"><KeyboardVoiceIcon sx={{color:"white"}}/>
        </div>
    </div>

    <div className="navbar_right">
        <Link to={'/2001/uploade'}>
        <VideoCallIcon sx={{fontSize:"30px",cursor:"pointer",color:"white"}} />
        </Link>
        
        <NotificationsIcon sx={{fontSize:"30px",cursor:"pointer",color:"white"}} />
        <img onClick={handleClickModel} src={userPic} alt="logo" className="navbar-right-logo" />
{ navbarModel &&
        <div className="navbar-model">
            {isLogedIn && <div className="navbar-model-option" onClick={handleprofile}>Profile</div>}
            
            {isLogedIn && <div className="navbar-model-option" onClick={()=>onClickOfPopUpOption("logout")}>Logout</div>}
            {!isLogedIn && <div className="navbar-model-option" onClick={()=>onClickOfPopUpOption("login")}>Login</div>}
        </div>
}
    </div>

    {
        login && <Login setLoginModel={setLoginModel}/>
    }

  </div>
)}

export default Navbar;
