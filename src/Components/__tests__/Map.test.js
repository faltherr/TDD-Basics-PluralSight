import React from 'react';
import {shallow} from 'enzyme'
import Map from '../Map'

describe('Map', function(){
  let mountedMap;
  let props;

  beforeEach(()=>{
    props = {
      location: undefined,
      imageName: 'testmap.png' 
    }
    mountedMap = shallow(<Map {...props}/>)
  })
  it('renders without crashing', () => {
    let mountedMap = shallow(<Map/>);
  });
  it('contains an image', ()=>{
    const img = mountedMap.find('img')
    expect(img.length).toBe(1)
  })
  it('displays a default image when no parameters are given', ()=>{
    let defaultMap = shallow(<Map/>)
    const noImageSrc = defaultMap.find('img').prop('src');
    expect(noImageSrc).toEqual('images/none.png')
  })
  it('displays the map image name', ()=>{
    let testMap = mountedMap.find('img').prop('src')
    // expect(testMap).toEqual('images/none.png')
    expect(testMap).toBeTruthy()
  })
})