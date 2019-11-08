import React from "react"
import CreatePost from "../CreatePost/CreatePost"
import Comments from "../Comments/Comments"
import "./ShowPosts.css"

function ShowPosts(props) {   
    return(
        <div id = "show-posts-container" className = "show-posts-container">
            <div id = "show-posts-header" className = "show-posts-header">
                <button id = "show-all-posts" className = "button">Show All Posts</button>
                <button id = "show-my-posts" className = "button">Show My Posts</button>
            </div>
            <div className = "show-posts-main">
                <ul>
                { 
                    props.posts?
                    props.posts.map((post,index)=>{
                        const { userName, postContent, comments } = post;
                        return (
                            <li>
                                <div id = "show-posts-user-info" className = "show-posts-user-info">
                                    <span className = "small-text block"> Posted by : </span> 
                                    {userName}
                                </div>
                                <div id = "show-posts-post-content" className = "show-posts-post-content">
                                    {postContent}
                                </div>
                                <div id = "comments-section" className = "comments-section">
                                    <Comments/>
                                </div>
                            </li>
                        )   
                    }) : ""
                }
                </ul>
            </div>
        </div>
            
    )
}
export default ShowPosts;