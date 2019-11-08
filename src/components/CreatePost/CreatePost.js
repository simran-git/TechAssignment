import React from "react"
import axios from "../../axios-posts"
import "./CreatePost.css"


function CreatePosts(props) {
    return(
        <div id="create-post-container" className = "create-post-container">
            <input id = "post-textbox" placeholder = {props.placeholder} onChange = {(event)=>props.onTextChange(event.target)} />
            <button id="submit-post" onClick={props.onSubmit}>{props.submitButtonText}</button>
        </div>
    )
}
export default CreatePosts;