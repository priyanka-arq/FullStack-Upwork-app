import React from "react";
import Profile from "../Profile";
import Root from "../../../Root";
import { shallow } from "enzyme";
import profiles from "../../../fixtures/profiles";
import toJSON from "enzyme-to-json";

let wrapped, loadProfiles;

beforeEach(() => {
  loadProfiles = jest.fn();
  wrapped = shallow(
    //testing connected version of Profile by wrapping it with <Root />
    <Root>
      <Profile profiles={profiles} loadProfiles={loadProfiles} />
    </Root>
  );
});

test("Should render profile correctly ", () => {
  expect(toJSON(wrapped)).toMatchSnapshot();
});
