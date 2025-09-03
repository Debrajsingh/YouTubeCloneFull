import React from 'react'
import './homePage.css'
import { Link } from 'react-router-dom';

const HomePage = ({sideNavbar}) => {

const options = ['All', 'Music', 'Videos', 'News', 'Sports', 'Gaming', 'Movies', 'Fashion', 'Learning', 'Live', '360° Videos', 'Travel', 'Comedy', 'Entertainment', 'Science & Technology', 'Education', 'Podcasts', 'Documentaries', 'Animals', 'Autos & Vehicles'];

  return (
    <div className={sideNavbar?'homePage':'fullHomePage'}>
      <div className="homePage_options">
        {
        options.map((item, index) => {
          return (
          <div key={index} className="homePage_option">{item}</div>
          );
        })
      }
      </div>
      
      <div className={sideNavbar? "home_mainPage":"home_mainPageWithoutLink"}>
        <Link to={'/watch/2001'} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/Txv786CO3ok/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB0qslE6o8TnP7_UuDdM2HTmX_37A" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timeingThumbnail">
              28:34
            </div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.googleusercontent.com/NO-xhKqiIdN23_EwT37Qq7fvbc6YPdRoRCs2wM5ksQaGX5nrCYjtBIhlpLQAS-dq3AhrzyzHeAc=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">I'm Confused... SmackDown In France Was GREAT or TRASH?</div>
              <div className="youtube_channelName">
                TheGreatOne
              </div>
              <div className="youtube_viewsAndDate">
                1.2M views • 2 weeks ago
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/watch/2001'} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/V9uJ3mcOFA0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBlrQombzamG_RlpcuAxvDWRydEUw" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timeingThumbnail">
              2:25
            </div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.googleusercontent.com/ytc/AIdro_lrYaU4SHLKlWw2bgkcfSBDRTKF88pHC7gDswC7UWukz6g=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Avatar: Fire and Ash | Official Trailer | In Cinemas December 19</div>
              <div className="youtube_channelName">
                20th Century Studios India
              </div>
              <div className="youtube_viewsAndDate">
                30M views • 1 Month ago
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/watch/2001'} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/vjaY3ODt7x0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDaR2G1gKZZXIRn79gtLIyx1wF30A" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timeingThumbnail">
              10:49
            </div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.googleusercontent.com/ytc/AIdro_muzDjR0hfGdlXBS-2A8NfR-Q9e-PO96K-gxrm2i1jSStI7=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">FULL MATCH - All-Star Battle Royal: Raw, July 15, 2019</div>
              <div className="youtube_channelName">
                WWE
              </div>
              <div className="youtube_viewsAndDate">
                8M views • 4 years ago
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/watch/2001'} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/ZL8d02JdATs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqxv_jAgwr6v97T2fNG-0_sB2m7w" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timeingThumbnail">
              2:29
            </div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/QnJToC1ruj3JSBhPLc5Mqk24kmUb_Oqna3B1vfQYj6143Na4wXJnzNJURDVqwCKv-qjivyjZZvU=s88-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">KRAKEN Official Trailer (2025) New Big Budget Sci-Fi Movies 4K</div>
              <div className="youtube_channelName">
                MovieGasm
              </div>
              <div className="youtube_viewsAndDate">
                4.6M views • 3 weeks ago
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/watch/2001'} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/h11i1Ce5wRU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCrugm0L1Tk4QeG22Mj9PEEIdkeNA" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timeingThumbnail">
              17:57
            </div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/iEeC-0nt8VP3XJYvWFsHyFhV7VoMYdF-BZzoQMUzwKjv3H5_OzfWAiRmc4_biEVz-cmxkyTHtls=s68-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">We Battled The Strongest New Tera Pokemon</div>
              <div className="youtube_channelName">
                Play More
              </div>
              <div className="youtube_viewsAndDate">
                18k views • 6 days ago
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/watch/2001'} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/9lWNuBfYF30/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDIfEndkdm8sPSCEZZLhYILNV7Wvw" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timeingThumbnail">
              8:11
            </div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/ADQ-_YsvJspXpEkGWHTCDE65VSS8GSOtWX0J59WkM_n1U15WvUTku10wIgU2alolxipUivLZ=s88-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Spider-Man Fights Electro | The Amazing Spider-Man 2 (Andrew Garfield, Jamie Foxx)</div>
              <div className="youtube_channelName">
                Action City
              </div>
              <div className="youtube_viewsAndDate">
                1 M views • 3 months ago
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/watch/2001'} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/ooOSFvBa55w/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAfavtumAzNyyTYT1MJzlaDtTT8Tg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timeingThumbnail">
              4:50
            </div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/k7BhK-hm9_MbJbaKznHPhir6e4pWXbm1ppAHoseLIzRgoAPBMmH1IIhYKlXbGono25RD1OQwHQ=s88-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Hulkbuster VS Hulk Fight | Avengers: Age of Ultron | Official Clip</div>
              <div className="youtube_channelName">
                Marvel Entertainment
              </div>
              <div className="youtube_viewsAndDate">
                1.5M views • 1 month ago
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/watch/2001'} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/dvPGJ9pu2T4/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAzEJ084tMmZyT0DdWNGEK2fOh9eQ" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timeingThumbnail">
              12:40
            </div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/GirzvcU2JVuldnuWEnKmFry9ULCwOjRBXQCdGsqEK9l6SBno42GZUfAgSosd8g4nffdS8BIfKGs=s68-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Loaded Dice Is Such An UNFAIR Item!! | Gen 9 OU</div>
              <div className="youtube_channelName">
                ChillLanturn
              </div>
              <div className="youtube_viewsAndDate">
                163 views • 1 day ago
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/watch/2001'} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/m9s1NQG3TNY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDNwr3cvkxS98gGs_EbYdK33g927Q" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timeingThumbnail">
              22:01
            </div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.googleusercontent.com/cxE8FStJktJ2oiuv1f-7OHMfJI7ZlMby4NgPDkfJTyV3sOsvdo5pmsAb8TAcJVNor6gNT2h_0w=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">MR BEAST PARODY 🤑 Ft. INDIAN CREATORS | CARRYMINATI</div>
              <div className="youtube_channelName">
                CarryMinati
              </div>
              <div className="youtube_viewsAndDate">
                91M views • 10 months ago
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/watch/2001'} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/FMX98ROVRCE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB1Q_CrvmLXgXudC24B9ir4DwTv8A" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timeingThumbnail">
              5:09
            </div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/ZT8_CI_nisRYWvEybMR-EJavrqwZPqcSKmhOpAYJDA7K3HVQpRIRxqijl5dZPTHHFRIk274f8w=s88-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">LIZA - DREAM feat. Kentaro Sakaguchi (Official Short Film MV)</div>
              <div className="youtube_channelName">
                LLOUD Official
              </div>
              <div className="youtube_viewsAndDate">
                25M views • 2 weeks ago
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/watch/2001'} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/FMX98ROVRCE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB1Q_CrvmLXgXudC24B9ir4DwTv8A" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timeingThumbnail">
              5:09
            </div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/ZT8_CI_nisRYWvEybMR-EJavrqwZPqcSKmhOpAYJDA7K3HVQpRIRxqijl5dZPTHHFRIk274f8w=s88-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">LIZA - DREAM feat. Kentaro Sakaguchi (Official Short Film MV)</div>
              <div className="youtube_channelName">
                LLOUD Official
              </div>
              <div className="youtube_viewsAndDate">
                25M views • 2 weeks ago
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/watch/2001'} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/FMX98ROVRCE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB1Q_CrvmLXgXudC24B9ir4DwTv8A" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timeingThumbnail">
              5:09
            </div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/ZT8_CI_nisRYWvEybMR-EJavrqwZPqcSKmhOpAYJDA7K3HVQpRIRxqijl5dZPTHHFRIk274f8w=s88-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">LIZA - DREAM feat. Kentaro Sakaguchi (Official Short Film MV)</div>
              <div className="youtube_channelName">
                LLOUD Official
              </div>
              <div className="youtube_viewsAndDate">
                25M views • 2 weeks ago
              </div>
            </div>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default HomePage