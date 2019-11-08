import React from 'react'
import { shallow, mount } from 'enzyme'
import CreatePost from './CreatePost'
import axios from "axios"

describe('Form Component <CreatePost />', () => {
  let wrapper;
  beforeEach(()=>{
     wrapper = mount(<CreatePost />)
  })

  it('should display a input', () => {
    const input = wrapper.find('#post-textbox');
    expect(input).to.have.lengthOf(1);
  });

  it('should display a done button', () => {
      const button = wrapper.find('#submit-post');
      expect(button).to.have.lengthOf(1);
  });
  });