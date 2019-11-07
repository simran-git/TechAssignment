import React from "react"
import axios from "../.././axios-posts"


class CreatePosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.inputEl = React.createRef();
        this.onPostTextChange = this.onPostTextChange.bind(this);
        this.onSubmitPost = this.onSubmitPost.bind(this);
    }

    onPostTextChange(event) {
        const target = event.target;
        const text = target.value
        this.setState({
            text: text
        });
    }

    onSubmitPost(event) {
        const data = this.state.text;
        const url = '/posts.json';
        const type = "POST";
        this.makeAjaxRequest(type, url, data);
    }

    makeAjaxRequest(type,url,data) {
        if(type.toUpperCase()==="POST") {
            axios.post(url,{
                content: data
            }).then()
              .catch()
        }
    }

    render() {
        return(
            <div>
                <form>
                    <input id = "post-textbox" onChange = {this.onPostTextChange} />
                </form>
                <button id="submit-post" onClick={this.onSubmitPost}>Done</button>
            </div>
        )
    }
}
export default CreatePosts;