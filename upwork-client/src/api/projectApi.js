import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";

const SERVER_URL = process.env.REACT_APP_SERVER_ENDPOINT + "/projects";

export const getProjects = async () => {
  const projects = await fetch(SERVER_URL)
    .then((res) => res.json())
    .catch(handleError);

  return projects;
  //return await fetch(SERVER_URL).then(handleResponse).catch(handleError);
};

export const createNewProject = (project) => {
  return fetch(SERVER_URL, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(project),
  })
    .then(handleResponse)
    .catch(handleError);
};

export const updateSelectedProject = (project, project_id) => {
  return fetch(SERVER_URL + `/${project_id}`, {
    method: "PUT",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(project),
  })
    .then(handleResponse)
    .catch(handleError);
};
