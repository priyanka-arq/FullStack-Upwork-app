import axios from "axios";
import { getProfiles, getCurrentUserProfile } from "./profileApi";
import profiles from "../fixtures/profiles";

jest.mock("axios");

beforeEach(() => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(profiles),
    })
  );
});

test("should do get request to profiles api", async () => {
  await getProfiles();
  expect(fetch).toHaveBeenCalled();
});

test("should get request to current user profile", () => {
  const userId = "123abc";
  const currentUser = "mockuser";

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(currentUser),
    })
  );

  getCurrentUserProfile(userId);
  expect(fetch).toHaveBeenLastCalledWith(
    `https://priyankapatel-oz-upwork.herokuapp.com/user/${userId}`
  );
});
