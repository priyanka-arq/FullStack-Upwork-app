import * as searchApi from "../../api/searchApi";

export const searchResponse = (response) => {
  return {
    type: "SEARCH_RESULT",
    response,
  };
};

export const loadResults = (query) => {
  return (dispatch) => {
    return searchApi
      .searchResult(query)
      .then((response) => {
        dispatch(searchResponse(response));
      })
      .catch((error) => {
        throw console.error();
      });
  };
};
