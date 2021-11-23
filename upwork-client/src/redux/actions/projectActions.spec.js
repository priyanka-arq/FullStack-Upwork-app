import {
  setProjects,
  createProjectSuccess,
  updateProjectSuccess,
  loadProjects,
  saveProject,
  updateProject,
} from "./projectActions";
import axios from "axios";
import { LOAD_PROJECTS, CREATE_PROJECT, UPDATE_PROJECT } from "./actionTypes";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import * as projectApi from "../../api/projectApi";
import projects from "../../fixtures/projects";

jest.mock("axios");
const createMockStore = configureMockStore([thunk]);

describe("setProjects", () => {
  it("has the correct type", () => {
    const action = setProjects();
    expect(action.type).toEqual(LOAD_PROJECTS);
  });

  it("has the correct payload", (done) => {
    const action = {
      type: LOAD_PROJECTS,
      project: "mockProject",
    };
    expect(action.project).toEqual("mockProject");
    done();
  });
});

describe("should load projects", (done) => {
  const store = createMockStore();
  store.dispatch(loadProjects()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: LOAD_PROJECTS,
      projects,
    });
    done();
  });
});

describe("should save project to database ", (done) => {
  const store = createMockStore();
  store.dispatch(saveProject(projects[1])).then(() => {
    const actions = (store = getActions());
    expect(actions[0]).toEqual({
      type: CREATE_PROJECT,
      project: projects[1],
    });
    done();
  });
});

describe("should save updated project to database ", (done) => {
  const store = createMockStore();
  store.dispatch(updateProject(projects[1], projects[1]._id)).then(() => {
    const actions = (store = getActions());
    expect(actions[0]).toEqual({
      type: UPDATE_PROJECT,
      project: projects[1],
      projectId: projects[1]._id,
    });
    done();
  });
});
