import React from 'react'
import { shallow, mount } from 'enzyme'
import Main from './Main'

describe('Form Component for user info<Form />', () => {
  let wrapper;
  beforeEach(()=>{
     wrapper = mount(<Main />)
  })

  it('should display form element <Form>', () => {
    const element = wrapper.find('#user-form')
    expect(element).to.have.lengthOf(1);
  });
  it('should display write post section ', () => {
    const element = wrapper.find('#create-post-container');
    expect(element).to.have.lengthOf(1);
  });

  it('should display show posts section', () => {
    const element = wrapper.find('#show-posts-container');
    expect(element).to.have.lengthOf(1);
  });
});