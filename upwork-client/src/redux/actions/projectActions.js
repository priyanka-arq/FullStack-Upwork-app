import * as projectApi from "../../api/projectApi";

//to get all projects from database
export const setProjects = (projects) => {
  return {
    type: "LOAD_PROJECTS",
    projects,
  };
};

//create new project action
export const createProjectSuccess = (project) => {
  return {
    type: "CREATE_PROJECT",
    project,
  };
};

//update project of current user
export const updateProjectSuccess = (projectId, updates) => {
  return {
    type: "UPDATE_PROJECT",
    projectId,
    updates,
  };
};

//load all projects with api call
export const loadProjects = () => {
  return (dispatch) => {
    return projectApi
      .getProjects()
      .then((projects) => {
        dispatch(setProjects(projects));
      })
      .catch((error) => {
        throw console.error();
      });
  };
};

//create new project with api call
export const saveProject = (project) => {
  return (dispatch) => {
    return projectApi
      .createNewProject(project)
      .then((project) => {
        dispatch(createProjectSuccess(project));
      })
      .catch((error) => {
        throw console.error();
      });
  };
};

export function updateProject(project, project_id) {
  return function (dispatch) {
    return projectApi
      .updateSelectedProject(project, project_id)
      .then((project) => {
        dispatch(updateProjectSuccess(project));
      })
      .catch((error) => {
        throw error;
      });
  };
}
