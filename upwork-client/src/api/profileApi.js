import { handleResponse, handleError } from "./apiUtils";

const SERVER_URL = process.env.REACT_APP_SERVER_ENDPOINT + "/profiles";
const SERVER_URL_PROFILE = process.env.REACT_APP_SERVER_ENDPOINT + "/user/";

export const getProfiles = async () => {
  const profiles = await fetch(SERVER_URL)
    .then((res) => res.json())
    .catch(handleError);

  return profiles;
  //return await fetch(SERVER_URL).then(handleResponse).catch(handleError);
};

export const getCurrentUserProfile = async (user_id) => {
  const profile = await fetch(SERVER_URL_PROFILE + `${user_id}`)
    .then((res) => res.json())
    .catch(handleError);
  return profile;
};

export const updateUserProfile = (profile, user_id) => {
  const updatedProfile = fetch(SERVER_URL_PROFILE + `${user_id}`, {
    "Access-Control-Allow-Methods": "PUT",
    "Access-Control-Allow-Headers": {
      "Content-Type": "application/json",
    },
    "Access-Control-Allow-body": JSON.stringify(profile),
  })
    .then((res) => res.json())
    .catch(handleError);
  return updatedProfile;
};

export const createNewProfile = async (profile) => {
  const newProfile = await fetch(SERVER_URL, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  })
    .then((res) => res.json())
    .catch(handleError);
  return newProfile;
};
