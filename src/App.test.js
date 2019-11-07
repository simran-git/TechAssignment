import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from './axios-posts'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should send text to server', (done) => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  axios.get('/posts.json/').then(response=> {
    expect(response.status).toBe(200);
    expect(response.data).not.toBeUndefined();
    ReactDOM.unmountComponentAtNode(div);
    done();
   })
    .catch(error=>console.log(error))
  

})
