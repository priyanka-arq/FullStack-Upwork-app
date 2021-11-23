import { handleResponse, handleError } from "./apiUtils";

const SERVER_URL = process.env.REACT_APP_SERVER_ENDPOINT + "/projects/search/";

export const searchResult = (query) => {
  return fetch(SERVER_URL + `${query}`)
    .then(handleResponse)
    .catch(handleError);
};
