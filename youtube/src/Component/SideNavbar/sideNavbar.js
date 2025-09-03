import React from 'react'
import './sideNavbar.css'
import HomeIcon from '@mui/icons-material/Home';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { Link } from 'react-router-dom';

const SideNavbar = ({sideNavbar}) => {
  return (
    <div className={sideNavbar?"home-sideNavbar":"homeSideNavbarHide"}>
      <div className="home-sideNavbarTop">
        <Link to={'/'} className={"home-sideNavbarTopOption"}>
          <HomeIcon />
          <div className="home-sideNavbarTopOptionTitle">Home</div>
        </Link>
        <div className={"home-sideNavbarTopOption"}>
          <VideoCallIcon/>
          <div className="home-sideNavbarTopOptionTitle">Shorts</div>
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <SubscriptionsIcon/>
          <div className="home-sideNavbarTopOptionTitle">Subscription</div>
        </div>
      </div>
      <div className="home-sideNavbarMiddle">
        <div className={"home-sideNavbarTopOption"}>
          <div className="home-sideNavbarTopOptionTitle">You</div>
          <KeyboardArrowRightIcon />
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <RecentActorsIcon/>
          <div className="home-sideNavbarTopOptionTitle">Your channel</div>
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <HistoryIcon/>
          <div className="home-sideNavbarTopOptionTitle">History</div>
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <PlaylistPlayIcon/>
          <div className="home-sideNavbarTopOptionTitle">Playlists</div>
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <SmartDisplayOutlinedIcon/>
          <div className="home-sideNavbarTopOptionTitle">Your videos</div>
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <AccessTimeIcon/>
          <div className="home-sideNavbarTopOptionTitle">Watch later</div>
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <ThumbUpOffAltIcon/>
          <div className="home-sideNavbarTopOptionTitle">Liked videos</div>
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <ContentCutIcon/>
          <div className="home-sideNavbarTopOptionTitle">Your clips</div>
        </div>
      </div>
       <div className="home-sideNavbarTop">
        <div className={"home-sideNavbarTopOption"}>
                   <div className="home-sideNavbarTopOptionTitleHeader">Subscription</div>
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <img className='home-sideNavbarTopOptionImg' src="https://i.pinimg.com/736x/fb/dc/f4/fbdcf4b9742a55e3434de52b6cba87fb.jpg" alt="channel"/>
          <div className="home-sideNavbarTopOptionTitle">Mr Beast</div>
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <img className='home-sideNavbarTopOptionImg' src="https://yt3.googleusercontent.com/ieK0j0sDqI_AHDwYxZ2Wly07-R7PG4S3YMtxOWCEe1QH-I0FgimJ92tlydQa6M78YD0VaywCaw=s900-c-k-c0x00ffffff-no-rj" alt="channel"/>
          <div className="home-sideNavbarTopOptionTitle">IShowSpeed</div>
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <img className='home-sideNavbarTopOptionImg' src="https://i.redd.it/vwo8r85tmaxc1.jpeg" alt="channel"/>
          <div className="home-sideNavbarTopOptionTitle">PewDiePie</div>
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <img className='home-sideNavbarTopOptionImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/1317px-T-series-logo.svg.png" alt="channel"/>
          <div className="home-sideNavbarTopOptionTitle">T-Series</div>
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <img className='home-sideNavbarTopOptionImg' src="https://yt3.googleusercontent.com/cxE8FStJktJ2oiuv1f-7OHMfJI7ZlMby4NgPDkfJTyV3sOsvdo5pmsAb8TAcJVNor6gNT2h_0w=s900-c-k-c0x00ffffff-no-rj" alt="channel"/>
          <div className="home-sideNavbarTopOptionTitle">CarryMinati</div>
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <img className='home-sideNavbarTopOptionImg' src="https://yt3.googleusercontent.com/H2c8y3sN7j3Hslc_eCun0FSJCQcrYl4zPyhsCt1510INBq1h2vFQTMUOtI4HJNkFD07s0pFlCA=s900-c-k-c0x00ffffff-no-rj" alt="channel"/>
          <div className="home-sideNavbarTopOptionTitle">BB Ki Vines</div>
        </div>
        <div className={"home-sideNavbarTopOption"}>
          <img className='home-sideNavbarTopOptionImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/WWE_official_logo.svg/1200px-WWE_official_logo.svg.png" alt="channel"/>
          <div className="home-sideNavbarTopOptionTitle">WWE</div>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar