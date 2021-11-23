import React from "react";
import DisplayProfile from "../DisplayProfile";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import profiles from "../../../fixtures/profiles";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<DisplayProfile profile={profiles[1]} />);
});

afterEach(() => {
  wrapped.unmount();
});

test("should render Display Profile correctly", () => {
  expect(toJSON(wrapped)).toMatchSnapshot();
});

it("has a button and img", () => {
  //test jsx elements
  expect(wrapped.find("button").length).toEqual(1);
  expect(wrapped.find("img").length).toEqual(3);

  //css selector
  expect(wrapped.find(".portfolio").length).toEqual(1);

  //expect(wrapped.props().profile).toEqual("profile");
});
