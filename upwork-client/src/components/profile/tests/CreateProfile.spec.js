import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { CreateProfile } from "../CreateProfile";
//import ProfileForm from "../Profileform";
import profiles from "../../../fixtures/profiles";

let wrapped, createProfile, history, userReady;

beforeEach(() => {
  createProfile = jest.fn();
  history = { push: jest.fn() };
  userReady = true;
  wrapped = shallow(
    <CreateProfile
      profiles={profiles}
      createProfile={createProfile}
      history={history}
    />
  );
});

// afterEach(() => {
//   wrapped.unmount();
// });

test("should render Create Profile Correctly", () => {
  expect(toJSON(wrapped)).toMatchSnapshot();
});

test("should render ProfileForm", () => {
  expect(wrapped.find("ProfileForm").length).toEqual(1);
});

test("should handle onSubmit", () => {
  wrapped.find("ProfileForm").prop("onSubmit")(profiles[1]);
  expect(history.push).toHaveBeenLastCalledWith("/profiles");
  expect(createProfile).toHaveBeenLastCalledWith(profiles[1]);
});
