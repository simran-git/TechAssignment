import React from 'react';
import { shallow, mount } from 'enzyme';
import CreatePosts from './CreatePosts'
import sinon from 'sinon';
import axios from "axios";

describe('Form Component <CreatePosts />', () => {

    it('should display a input', () => {
      const wrapper = shallow(<CreatePosts />);
      const input = wrapper.find('#post-textbox');
      expect(input).to.have.lengthOf(1);
    });

    it('should display a done button', () => {
        const wrapper = shallow(<CreatePosts />);
        const button = wrapper.find('#submit-post');
        expect(button).to.have.lengthOf(1);
    });
  });