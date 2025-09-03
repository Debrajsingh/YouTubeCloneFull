import React,{useState} from "react";
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link,useNavigate } from 'react-router-dom' 
import Login from "../Login/login";
//import SideNavbar from "../SideNavbar/sideNavbar";
//import PersonIcon from '@mui/icons-material/Person';

const Navbar = ({setSideNavbarFunc, sideNavbar}) => {
    const [userPic] = useState("https://cdn.vectorstock.com/i/500p/54/69/male-user-icon-vector-8865469.jpg")
    const [navbarModel,setNavbarModel] = useState(false);
    const [login,setLogin] =useState(false);
    const navigate = useNavigate();

    const handleClickModel =()=>{
        setNavbarModel(prev=>!prev);
    }
    const sideNavbaeFunc =()=>{
        setSideNavbarFunc(!sideNavbar);
    }
    const handleprofile =()=>{
        navigate('/user/2001');
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

        }
    }
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
            <div className="navbar-model-option" onClick={handleprofile}>Profile</div>
            <div className="navbar-model-option" onClick={()=>onClickOfPopUpOption("logout")}>Logout</div>
            <div className="navbar-model-option" onClick={()=>onClickOfPopUpOption("login")}>Login</div>
        </div>
}
    </div>

    {
        login && <Login setLoginModel={setLoginModel}/>
    }

  </div>
)}

export default Navbar;
