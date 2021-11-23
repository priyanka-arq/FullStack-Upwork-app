import axios from "axios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {
  setProfile,
  createProfileSuccess,
  loadProfiles,
  getProfile,
  createProfile,
} from "./profileActions";
import * as profileApi from "../../api/profileApi";
import profiles from "../../fixtures/profiles";
import {
  LOAD_PROFILES,
  CREATE_PROFILE,
  GET_PROFILE,
  UPDATE_PROFILE,
} from "./actionTypes";

jest.mock("axios");
const createMockStore = configureMockStore([thunk]);

describe("#setProfileAction", () => {
  describe("#setProfile", () => {
    test("should return action with profiles in payload", () => {
      expect(setProfile(["p1", "p2"])).toEqual({
        type: LOAD_PROFILES,
        profiles: ["p1", "p2"],
      });
    });
  });
});

test("should create profile with payload value", () => {
  const action = createProfileSuccess(profiles[0]);
  expect(action).toEqual({
    type: CREATE_PROFILE,
    profile: profiles[0],
  });
});

test("should return profile with payload value", () => {
  const action = getProfile(profiles[1]);
  expect(action).toEqual({
    type: GET_PROFILE,
    profile: profiles[1],
  });
});

//fetch profiles with api call and set profiles
describe("#load Profiles", (done) => {
  const store = createMockStore();
  store.dispatch(loadProfiles()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: LOAD_PROFILES,
      profiles,
    });
    done();
  });
});

test("should add profile to database and store", (done) => {
  const store = createMockStore();
  const profile = {};

  store.dispatch(createProfile(profile)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: CREATE_PROFILE,
      profile,
    });
  });
  done();
});
