import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'
const Rightbar = ({ profile }) => {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="/assets/gift.png" alt="" />
                    <span className='birthdayText'>
                        <b> Pola Foster</b> and <b> 3 other friends </b> have a birthday today
                    </span>
                </div>

                <img className='rightbarAd' src="/assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>

                <ul className='rightbarFriendList'>
                    {Users.map(u => <Online key={u.id} user={u} />)}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City</span>
                        <span className="righbarInfoValue">New York</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="righbarInfoValue">Madrid</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="righbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>

                    <div className="rightbarFollowing">
                        <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>

                    <div className="rightbarFollowing">
                        <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>

                    <div className="rightbarFollowing">
                        <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>

                    <div className="rightbarFollowing">
                        <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>

                    <div className="rightbarFollowing">
                        <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                </div>
            </>
        )
    }
    console.log(profile)
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar