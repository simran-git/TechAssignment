import React from "react";
import "./Form.css"


function Form(props) {
    return (
        <div id = "user-form" className = "user-form-container">
            <form>
                <input type="text" id = "user-name" placeholder = "Enter name.." onChange={(event)=>{props.onUserNameChange(event.target)}}/>
            </form>
        </div>
    )
}
export default Form;