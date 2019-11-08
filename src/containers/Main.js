import React from "react";
import ShowPosts from "../components/ShowPosts/ShowPosts" 
import Form from "../components/Form/Form"
import CreatePost from "../components/CreatePost/CreatePost"
import axios from "../axios-posts"
import "./Main.css"

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            username: "",
            postContent: ''
        };
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onUserCityChange = this.onUserCityChange.bind(this);
        this.getCityInformation = this.getCityInformation.bind(this);
        this.onPostTextChange = this.onPostTextChange.bind(this);
        this.onSubmitPost = this.onSubmitPost.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        const url = '/posts.json';
        const type = "GET";
        this.makeAjaxRequest(type, url);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    onUserNameChange(inputEl) {
        const userName = inputEl.value;
        this.setState({
            userName
        });
    }

    onUserCityChange(inputEl) {
        const city = inputEl.value;
        this.getCityInformation(city);
    }

    getCityInformation(city) {
        Geocode.fromAddress(city).then(
            response => {
                debugger;
              const { lat, lng } = response.results[0].geometry.location;
              console.log(lat, lng);
            },
            error => {
              console.error(error);
            }
          );
    }

    onPostTextChange(inputEl) {
        const postContent = inputEl.value
        this.setState({
            postContent
        });
    }

    onSubmitPost(event) {
        const { postContent, userName } = this.state;
        const data = {
            postContent,
            userName,
            time: new Date()
        }
        const url = '/posts.json';
        const type = "POST";
        this.makeAjaxRequest(type, url, data);
    }

    onCommentTextChange(inputEl,postId) {
        const commentText = inputEl.value;
        const { userName } = this.state;
        this.setState({
            activeComment : {
                commentText,
                postId,
                userName
            }
        });
    }
    onSubmitComment() {
        const { commentText,postId } = this.state.activeComent;
        const { userName } = this.state;
        const data = {
            commentText,
            userName,
            time: new Date()
        }
        const url = `/posts/${postId}/comments.json`;
        const type = "POST";
        this.makeAjaxRequest(type, url, data, 'POST-COMMENT');
    }

    

    makeAjaxRequest(type, url, data, action ) {
        if(type.toUpperCase()==="POST") {
            if(action === "POST-COMMENT") {
                axios.post(url,data).then(response=>{

                })
              .catch()
            }
            axios.post(url,data).then()
              .catch()
        } else if(type.toUpperCase()==="GET") {
            axios.get(url)
            .then(response=>{
                if(this._isMounted) {
                    this.setState({
                        posts: response.data
                    })
                }
                })
            .catch()
        }
    }
    render() {
        return (
            <div id = "main-container">
                <div className = "container">
                    <Form onUserNameChange = {this.onUserNameChange} onUserCityChange = {this.onUserCityChange}/>
                    <CreatePost onTextChange = {this.onPostTextChange} onSubmit={this.onSubmitPost} placeholder = "Write Post here.." submitButtonText = "Post"/>
                    <ShowPosts posts = {Object.values(this.state.posts)} onSubmitComment = {this.onSubmitComment} />
                </div>   
            </div>
        )
    }
}
export default Main;