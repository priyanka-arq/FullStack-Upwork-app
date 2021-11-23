import React from "react";
import { shallow } from "enzyme";
import profiles from "../../../fixtures/profiles";

//import unconnected vesion of ProfileManagement and provide props
import { ProfileManagement } from "../ProfileManagement";
import toJSON from "enzyme-to-json";
//import DisplayProfile from "../DisplayProfile";
let wrapped, getCurrentProfile, loadProjects;

beforeEach(() => {
  loadProjects = jest.fn();

  wrapped = shallow(
    <ProfileManagement
      profiles={profiles}
      profile={profiles[0]}
      match={{ params: { userId: 1 } }}
      loadProjects={loadProjects}
    />
  );
});

test("should render ProfileManagement correctly", () => {
  expect(toJSON(wrapped)).toMatchSnapshot();
});

it("should render DisplayProfile", () => {
  expect(wrapped.find("DisplayProfile").length).toEqual(1);
});
