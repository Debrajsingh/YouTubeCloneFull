import React, { useEffect, useState } from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = ({ sideNavbar }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/allVideo")
      .then((res) => {
        console.log(res.data.videos);
        setData(res.data.videos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const options = [
    "All",
    "Music",
    "Videos",
    "News",
    "Sports",
    "Gaming",
    "Movies",
    "Fashion",
    "Learning",
    "Live",
    "360° Videos",
    "Travel",
    "Comedy",
    "Entertainment",
    "Science & Technology",
    "Education",
    "Podcasts",
    "Documentaries",
    "Animals",
    "Autos & Vehicles",
  ];

  return (
    <div className={sideNavbar ? "homePage" : "fullHomePage"}>
      <div className="homePage_options">
        {options.map((item, index) => {
          return (
            <div key={index} className="homePage_option">
              {item}
            </div>
          );
        })}
      </div>

      <div
        className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}
      >
        {data?.map((item, ind) => {
          return (
            <Link to={"/watch/${item._id}"} className="youtube_Video">
              <div className="youtube_thumbnailBox">
                <img
                  src={item.thumbnail}
                  alt="Thumbnail"
                  className="youtube_thumbnailPic"
                />
                <div className="youtube_timeingThumbnail">28:34</div>
              </div>
              <div className="youtubeTitleBox">
                <div className="youtubeTitleBoxProfile">
                  <img
                    src={item?.user?.profilePic}
                    alt="profile"
                    className="youtube_thumbnail_Profile"
                  />
                </div>

                <div className="youtubeTitleBox_Title">
                  <div className="youtube_videoTitle">
                    {item?.title}
                  </div>
                  <div className="youtube_channelName">{item?.user?.channelName}</div>
                  <div className="youtube_viewsAndDate">
                    {item?.like} likes
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
