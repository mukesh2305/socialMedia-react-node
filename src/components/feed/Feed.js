import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
const Feed = ({ username }) => {
    console.log("username>>>>>>>>", username)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const url =
                username ?
                    'http://localhost:8000/api/posts/profile/' + username
                    : 'http://localhost:8000/api/posts/timeline/6245fbeb0cdf72b1db059e1c'
            console.log("url>>>>>>>>", url)
            const res = await axios.get(url)
            console.log("res.data", res.data)
            setPosts(res.data.posts)
        }
        fetchPosts();
    }, [])
    return (
        <div className='feed'>

            <div className="feedWrapper">
                <Share />
                {posts?.map((p, index) => {
                    return (
                        <Post key={p._id} post={p} />
                    )
                })}

            </div>
        </div>
    )
}

export default Feed