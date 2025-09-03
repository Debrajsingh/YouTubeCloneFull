import React from 'react'
import './profile.css'
import SideNavbar from '../../Component/SideNavbar/sideNavbar'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';

const Profile = ({sideNavbar}) => {
  return (
    <div className='profile'>
        <SideNavbar sideNavbar={sideNavbar}/>

        <div className={sideNavbar?"profile_page":"profile_page_inactive"}>

            <div className="profile_top_section">
                <div className="profile_top_section_profile">
                    <img src="https://yt3.googleusercontent.com/e90SyCF6piF5Pl8SKKt21Bjq97tYNoXOIaMBlwy4nxW1XdgosuR4xKuJ6GAY75osyuU2wGvpPq4=s160-c-k-c0x00ffffff-no-rj" alt="" className="profile_top_section_img" />
                </div>
                <div className="profile_top_section_About">
                    <div className="profile_top_section_About_Name">
                        MUI Goku
                    </div>
                    <div className="profile_top_section_info">@songokumui . 11 videos</div>
                    <div className="profile_top_section_info">Hi my name is Goku</div>
                </div>
            </div>

            <div className="profile_videos">
                <div className="profile_videos_title">
                    Videos &nbsp; <PlayArrowIcon/>
                </div>
                <div className="profileVideos">
                    <Link to={'/watch/2001'} className="profileVideos_block">
                        <div className="profileVideos_block_thumbnail">
                            <img src="https://i.ytimg.com/vi/FsSCGYVTw14/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGBQgcigRMA8=&rs=AOn4CLCLdhheK_G86bni_udjS6AXbepIeg" alt="" className="profileVideos_block_thumbnail_img" />
                        </div>
                        <div className="profileVideos_block_detail">
                            <div className="profileVideos_block_detail_name">When me and my buddy Picolo beat my brother.
                            </div>
                            <div className="profileVideos_block_detail_about">Created at 2018-09-12</div>
                        </div>
                    </Link>
                    <Link to={'/watch/2001'} className="profileVideos_block">
                        <div className="profileVideos_block_thumbnail">
                            <img src="https://i.ytimg.com/vi/Ky55g2epjSI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBwGaSxlXlUrEwIzqCTH7GG61oPVw" alt="" className="profileVideos_block_thumbnail_img" />
                        </div>
                        <div className="profileVideos_block_detail">
                            <div className="profileVideos_block_detail_name">Me vs Nappa.
                            </div>
                            <div className="profileVideos_block_detail_about">Created at 2019-09-12</div>
                        </div>
                    </Link>
                    <Link to={'/watch/2001'} className="profileVideos_block">
                        <div className="profileVideos_block_thumbnail">
                            <img src="https://i.ytimg.com/vi/dapsO-1kzFk/hqdefault.jpg?sqp=-oaymwFBCOADEI4CSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AG-AoAC8AGKAgwIABABGF8gRChlMA8=&rs=AOn4CLAns412Rygx0dbtxxjUWVx7D55jhg" alt="" className="profileVideos_block_thumbnail_img" />
                        </div>
                        <div className="profileVideos_block_detail">
                            <div className="profileVideos_block_detail_name"> Me, Krillin and Gohan vs Vageta.
                            </div>
                            <div className="profileVideos_block_detail_about">Created at 2019-09-12</div>
                        </div>
                    </Link>
                    <Link to={'/watch/2001'} className="profileVideos_block">
                        <div className="profileVideos_block_thumbnail">
                            <img src="https://i.ytimg.com/vi/0_0ghPOd6UI/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA7b4mNUVWe_4wY7z-d8WScyNd4Wg" alt="" className="profileVideos_block_thumbnail_img" />
                        </div>
                        <div className="profileVideos_block_detail">
                            <div className="profileVideos_block_detail_name"> I went super saiyan vs Frieza.
                            </div>
                            <div className="profileVideos_block_detail_about">Created at 2020-09-12</div>
                        </div>
                    </Link>
                    <Link to={'/watch/2001'} className="profileVideos_block">
                        <div className="profileVideos_block_thumbnail">
                            <img src="https://i.ytimg.com/vi/AUnXFkHwGuU/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGDAgPyh_MA8=&rs=AOn4CLBSZqz1jALzPmKMdwWcnCoO34jILg" alt="" className="profileVideos_block_thumbnail_img" />
                        </div>
                        <div className="profileVideos_block_detail">
                            <div className="profileVideos_block_detail_name"> My biggest spirit bomb vs Majin Buu.
                            </div>
                            <div className="profileVideos_block_detail_about">Created at 2021-09-12</div>
                        </div>
                    </Link>
                    <Link to={'/watch/2001'} className="profileVideos_block">
                        <div className="profileVideos_block_thumbnail">
                            <img src="https://i.ytimg.com/vi/xNgZcd5YtvI/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGB8gSih_MA8=&rs=AOn4CLDm7RjQvc8tkfJ96rBpRdF0ovgosg" alt="" className="profileVideos_block_thumbnail_img" />
                        </div>
                        <div className="profileVideos_block_detail">
                            <div className="profileVideos_block_detail_name"> I experienced GOD kii vs Lord Beerus.
                            </div>
                            <div className="profileVideos_block_detail_about">Created at 2022-09-12</div>
                        </div>
                    </Link>
                    <Link to={'/watch/2001'} className="profileVideos_block">
                        <div className="profileVideos_block_thumbnail">
                            <img src="https://i.ytimg.com/vi/9f84ax65ruM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCK4mgmMtxSlJDzpyNBqLJ8hEVUiw" alt="" className="profileVideos_block_thumbnail_img" />
                        </div>
                        <div className="profileVideos_block_detail">
                            <div className="profileVideos_block_detail_name"> Frieza resurects and gains new powers.
                            </div>
                            <div className="profileVideos_block_detail_about">Created at 2022-10-12</div>
                        </div>
                    </Link>
                    <Link to={'/watch/2001'} className="profileVideos_block">
                        <div className="profileVideos_block_thumbnail">
                            <img src="https://i.ytimg.com/vi/VDVuoAseokI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD2RnJhXZ3WkcS6F5aRIDlAw5jIWw" alt="" className="profileVideos_block_thumbnail_img" />
                        </div>
                        <div className="profileVideos_block_detail">
                            <div className="profileVideos_block_detail_name"> Someone stole my body.
                            </div>
                            <div className="profileVideos_block_detail_about">Created at 2023-09-12</div>
                        </div>
                    </Link>
                    <div className="profileVideos_block">
                        <div className="profileVideos_block_thumbnail">
                            <img src="https://i.ytimg.com/vi/RSYT98syCQU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAUODZgIy3pjdk-5pOMLxJzMSnU0A" alt="" className="profileVideos_block_thumbnail_img" />
                        </div>
                        <div className="profileVideos_block_detail">
                            <div className="profileVideos_block_detail_name"> Fused sayans from universe 6.
                            </div>
                            <div className="profileVideos_block_detail_about">Created at 2024-09-12</div>
                        </div>
                    </div>
                    <Link to={'/watch/2001'} className="profileVideos_block">
                        <div className="profileVideos_block_thumbnail">
                            <img src="https://i.ytimg.com/vi/tfjL-xI-D5A/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIjUG0i-b-ps1JaY32Md7AbvSpRg" alt="" className="profileVideos_block_thumbnail_img" />
                        </div>
                        <div className="profileVideos_block_detail">
                            <div className="profileVideos_block_detail_name"> I unlocked my full power vs Jiren.
                            </div>
                            <div className="profileVideos_block_detail_about">Created at 2024-10-12</div>
                        </div>
                    </Link>
                    <Link to={'/watch/2001'} className="profileVideos_block">
                        <div className="profileVideos_block_thumbnail">
                            <img src="https://i.ytimg.com/vi/nxK_xAK1Lig/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCbJx5X9JB9BzW78O9UZrI7FheOcA" alt="" className="profileVideos_block_thumbnail_img" />
                        </div>
                        <div className="profileVideos_block_detail">
                            <div className="profileVideos_block_detail_name"> Had to fuse with Vageta to defete Broly.
                            </div>
                            <div className="profileVideos_block_detail_about">Created at 2025-10-12</div>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}


export default Profile