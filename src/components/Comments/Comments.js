import React from "react";


function Comments(props) {
    return (
        <div id = "show-comments">
            <ul>
                {
                    props.comments ? 
                    props.comments.map((comment,index)=>{
                        return (
                            <li>
                                {comment}
                            </li>
                        )
                    }) : ''
                }
            </ul>
            {
                
            }
        </div>
    )
}
export default Comments;