import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme'
import App from '../App';

describe("App", function(){
  it('renders without crashing', () => {
    let mountedApp = shallow(<App/>)
  });
  it('renders a Store Locator', () =>{
    let mountedApp = shallow(<App/>)
    const locators = mountedApp.find('StoreLocator');
    expect(locators.length).toBe(1);
  })
})
