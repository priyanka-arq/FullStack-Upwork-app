import projects from "../../fixtures/projects";
import projectReducer from "./projectReducer";
import {
  LOAD_PROJECTS,
  CREATE_PROJECT,
  UPDATE_PROJECT,
} from "../actions/actionTypes";

it("handle action with load projects", () => {
  const action = {
    type: LOAD_PROJECTS,
    projects,
  };

  const newState = projectReducer(projects, action);
  expect(newState).toEqual(projects);
});

it("should handle action with create project", () => {
  const project = {
    description: "TEST4",
    email: "TEST@ga.com",
    estimatedBudget: 100,
    name: "TEST4",
    paymentType: "Fixed-Price",
    phone: "056565566",
    skills: ["HTML", "Angular"],
  };

  const action = {
    type: CREATE_PROJECT,
    project,
  };

  const newState = projectReducer(projects, action);
  expect(newState).toEqual([...projects, action.project]);
});

it("should handle update project", () => {
  const action = {
    type: UPDATE_PROJECT,
    projectId: projects[0]._id,
    updates: {
      description: "update portfolio",
    },
  };
  const newState = projectReducer(projects, action);
  expect(newState[0].description).toEqual("update portfolio");
});
