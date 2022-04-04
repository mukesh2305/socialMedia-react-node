import React, { useEffect } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./profile.css"
import axios from 'axios'
const Profile = () => {
    const [user, setUser] = React.useState({});

    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:8000/api/users?username=jay`;
            const res = await axios.get(url);
            console.log("++++++++++++++++", res.data)
            setUser(res.date);
        };
        fetchData();
    }, []);


    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src="/assets/post/3.jpeg" alt="" />
                            <img className='profileUserImg' src="/assets/person/7.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>{user?.username}</h4>
                            <span className='profileInfoDesc'>{user?.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username="jay" />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile