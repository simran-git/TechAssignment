import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "./axios-posts.js"

function App() {
  postContent();
  return (
    <div>
      "Hello World!"
    </div>
  );
}

function postContent() {
  axios.put('/posts.json/',{
    content: 'This is  ghgvjh dummy content'
  }).then()
    .catch(error=>console.log(error))
}

export default App;
