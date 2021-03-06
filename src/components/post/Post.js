import React, { useEffect, useState } from 'react'
import "./post.css"
import { MoreVert } from '@material-ui/icons'
import axios from 'axios';
import { format } from "timeago.js"
import { Link } from 'react-router-dom'
const Post = ({ post }) => {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    console.log(post)
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        console.log(like);
        setIsLiked(!isLiked);
    }
    useEffect(() => {
        const fetchUsers = async () => {
            const url = `http://localhost:8000/api/users?userId=${post.userId}`
            const res = await axios.get(url)
            setUser(res.data)
        }
        fetchUsers();
    }, [post.userId])

    return (
        <div className='post'>
            <div className="postWrapper">

                <div className="postTop">

                    <div className="postTopLeft">
                        <Link to={`/profile/${user?.username}`}>
                            <img className='postProfileImg' src={user.profilePicture || "assets/person/Avatar.png"} alt="" />
                        </Link>
                        <span className='postUsername'>{user?.username}</span>
                        <span className='postTime'>{format(post.createdAt)}</span>
                    </div>

                    <div className="postTopRight">
                        <MoreVert htmlColor='tomato' className='postIcon' />
                    </div>
                </div>

                <div className="postCenter">
                    <span className='postText'>{post?.desc}</span>
                    <img className='postImg' src={post.img ? "assets/post/" + post.img : "assets/post/2.jpeg"} alt="" />
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
                        <img className='likeIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
                        <span className='postLikeCounter'>{like} people liked it </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post