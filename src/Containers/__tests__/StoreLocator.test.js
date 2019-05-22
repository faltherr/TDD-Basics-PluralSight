import React from "react";
import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator";
import axios from "axios";
import renderer from 'react-test-renderer';


describe("StoreLocator", function() {
  let mountedStoreLocator;
  //Use the same store locator before each of our tests
  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("Renders the correct snapshot", ()=>{
    const tree = renderer.create(<StoreLocator/>).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it("Calls axios.get in componentDidMount", () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalled();
      });
  });

  it("Calls axios.get with the correct url", () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalledWith(
          "http://localhost:3000/data/shops.json"
        );
      });
  });

  it("updates state with data from the api", () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        //Expect the value to be equal to our mock return value in the mock axios function
        expect(mountedStoreLocator.state()).toHaveProperty("shops", [
            {
              location: "test Location",
              address: "test Address"
            }
          ]);
      });
  });

  it("renders without crashing", () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("renders a header", () => {
    const headers = mountedStoreLocator.find("Header");
    expect(headers.length).toBe(1);
  });

  it("renders a map", () => {
    const map = mountedStoreLocator.find("Map");
    expect(map.length).toBe(1);
  });
});

describe("chooseMap", () => {
  it("updates this.state.currentMap based on the location passed into it", () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
    // Simulate the event comming from the button component
    let mockEvent = { target: { value: "testland" } };
    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe(
      "testland.png"
    );
  });
});
