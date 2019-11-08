import React from 'react'
import { shallow, mount } from 'enzyme'
import Form from './Form'
import axios from "axios"

describe('Form Component for user info<Form />', () => {
  let wrapper;
  beforeEach(()=>{
     wrapper = mount(<Form />)
  })

  it('should display a form', () => {
    const input = wrapper.find('form');
    expect(input).to.have.lengthOf(1);
  });

  it('should display a input', () => {
    const input = wrapper.find('#user-name');
    expect(input).to.have.lengthOf(1);
  });
});