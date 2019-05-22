import React from 'react';
import {shallow} from 'enzyme'
import Header from '../Header';

describe('Header', function(){
  let mountedHeader
  beforeEach(()=>{
    mountedHeader = shallow(<Header/>)
  })

  it('renders without crashing', () => {
    shallow(<Header/>);
  });

  it('renders a logo', () => {
    //Use enzyme's jQuery(CSS) style selectors to find the specific logo image
    const logoImg = mountedHeader.find('img').prop('src');
    expect(logoImg).toEqual('images/logo.png');
  });

})
