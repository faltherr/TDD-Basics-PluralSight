import React from 'react';
import {shallow} from 'enzyme'
import StoreLocator from '../StoreLocator'

describe('StoreLocator', function(){
  let mountedStoreLocator
  //Use the same store locator before each of our tests
  beforeEach(()=>{
    mountedStoreLocator = shallow(<StoreLocator/>)
  })

  it('renders without crashing', () => {
    let mountedStoreLocator = shallow(<StoreLocator/>);
  });

  it('renders a header', () => {
    const headers = mountedStoreLocator.find('Header');
    expect(headers.length).toBe(1)
  });

  it('renders three buttons', ()=>{
    const buttons = mountedStoreLocator.find('Button')
    expect(buttons.length).toBe(3)
  })

  it('renders a map', ()=>{
    const map = mountedStoreLocator.find('Map')
    expect(map.length).toBe(1)
  })
})

describe('chooseMap', ()=>{
  it('updates this.state.currentMap based on the location passed into it', ()=>{
    let mountedStoreLocator = shallow(<StoreLocator/>)
    // Simulate the event comming from the button component
    let mockEvent = {target: {value:'testland'}}
    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png')
  })
})