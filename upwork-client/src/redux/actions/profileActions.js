//import * as types from "./actionTypes";
import * as profileApi from "../../api/profileApi";
import Profile from "../../components/profile/Profile";

export const setProfile = (profiles) => {
  return {
    type: "LOAD_PROFILES",
    profiles,
  };
};

export const createProfileSuccess = (profile) => {
  return {
    type: "CREATE_PROFILE",
    profile,
  };
};

export const getProfile = (profile) => {
  return {
    type: "GET_PROFILE",
    profile,
  };
};

export const editUserProfile = (user, updates) => {
  return {
    type: "UPDATE_PROFILE",
    user,
    updates,
  };
};

export const loadProfiles = () => {
  return (dispatch) => {
    return profileApi
      .getProfiles()
      .then((profiles) => {
        dispatch(setProfile(profiles));
      })
      .catch((error) => {
        throw console.error();
      });
  };
};

//update existing profile

export function updateProfile(profile, user_id) {
  return function (dispatch) {
    return profileApi
      .updateUserProfile(profile, user_id)
      .then((profile) => {
        dispatch(editUserProfile(profile));
      })
      .catch((error) => {
        throw error;
      });
  };
}

//used to create new profile
export function createProfile(profile) {
  return function (dispatch) {
    return profileApi
      .createNewProfile(profile)
      .then((profile) => {
        dispatch(createProfileSuccess(profile));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function getCurrentProfile(user_id) {
  return function (dispatch) {
    return profileApi
      .getCurrentUserProfile(user_id)
      .then((profile) => {
        dispatch(getProfile(profile));
      })
      .catch((error) => {
        throw console.error();
      });
  };
}
