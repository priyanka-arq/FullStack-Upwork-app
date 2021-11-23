import profileReducer from "./profileReducer";
import {
  LOAD_PROFILES,
  CREATE_PROFILE,
  UPDATE_PROFILE,
} from "../actions/actionTypes";
import profiles from "../../fixtures/profiles";

//load profiles
it("handle action with type LOAD_PROFILES", () => {
  const action = {
    type: LOAD_PROFILES,
    profiles,
  };
  const newState = profileReducer(profiles, action);
  expect(newState).toEqual(profiles);
});

//handle unknown action
it("handle action with unknown type", () => {
  const newState = profileReducer([], { type: "AAAABBBBBBB" });
  expect(newState).toEqual([]);
});

//create new profile
it("shoud create new profile", () => {
  const profile = {
    imageUrl: null,
    name: "Test3",
    skills: ["React", "Node", "Java", "CSS"],
    title: "Junior Developer",
    phone: "04444444444",
    email: "test@ga.com",
    aboutme:
      "I have a great passion about solving real world problems and helping people. And now, with the skills that I have been learning in programming and computer science from the Software Engineering Course at General Assembly, I will be able to do that with new technologies. I believe in the power of technology and its impact to everyone's daily lives.",
    suburb: "Sydney",
    postcode: 2000,
    resume: "",
    portfolio: "https://little-chi-mai.github.io/portfolio",
    linkedIn: "https://linkedin.com/in/chi-mai-nguyenn",
    github: "https://github.com/little-chi-mai",
    user: null,
  };
  const action = {
    type: CREATE_PROFILE,
    profile,
  };

  const newState = profileReducer(profiles, action);
  expect(newState).toEqual([...profiles, profile]);
});

//edit profile
it("handle update profile action", () => {
  const action = {
    type: UPDATE_PROFILE,
    user: profiles[0].user,
    updates: {
      name: "Priyanka",
    },
  };
  const newState = profileReducer(profiles, action);
  expect(newState[0].name).toEqual("Priyanka");
});
