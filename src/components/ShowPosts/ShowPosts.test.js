import React from 'react'
import { shallow, mount } from 'enzyme'
import ShowPosts from './ShowPosts'

describe('Form Component for user info<Form />', () => {
  let wrapper;
  beforeEach(()=>{
     wrapper = mount(<ShowPosts />)
  })

  it('should display header', () => {
    const element = wrapper.find('#show-posts-header');
    expect(element).to.have.lengthOf(1);
  });
  it('should display header with show all posts button', () => {
    const element = wrapper.find('#show-all-posts');
    expect(element).to.have.lengthOf(1);
  });

  it('should display header with show my posts button', () => {
    const element = wrapper.find('#show-my-posts');
    expect(element).to.have.lengthOf(1);
  });
});