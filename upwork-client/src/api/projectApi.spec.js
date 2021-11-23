import axios from "axios";
import { getProjects, createNewProject } from "./projectApi";

jest.mock("axios");

afterEach(() => {
  jest.clearAllMocks();
});

describe("#get projects details", () => {
  beforeEach(() => {
    // axios.get.mockImplementationOnce(() => Promise.resolve(data));
    //  axios.get.mockResolvedValueOnce({ results: ["mockProjects"] });
    axios.get.mockImplementation(
      jest.fn().mockReturnValue({
        data: {
          projects: ["mockProjects"],
        },
      })
    );
  });

  test("should unwrap projects in data", (done) => {
    const result = getProjects().then((response) => {
      expect(response).toEqual(["mockProjects"]);
    });
    //expect(axios.get).toHaveBeenCalledTimes(1);
    // expect(axios.get).toHaveBeenCalledWith(
    //   "https://priyankapatel-oz-upwork.herokuapp.com/projects"
    // );
    done();
  });
});

describe("#should create new Project", () => {
  const project = "mockProjects";
  beforeEach(() => {
    axios.post.mockImplementation(
      jest.fn().mockReturnValue({
        data: {
          project: ["mockProjects"],
        },
      })
    );
  });
  test("should unwrap projects in data", (done) => {
    createNewProject(project).then((response) => {
      expect(response).toEqual(["mockProjects"]);
    });
    done();
  });
});
