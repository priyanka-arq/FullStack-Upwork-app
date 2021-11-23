import initialState from "../../utils/newSearch";

// export default function searchReducer(state = initialState, action) {
//   switch (action.type) {
//     case "SEARCH_RESULT":
//       return action.response;
//     default:
//       return state;
//   }
// }

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_RESULT":
      return action.response;

    default:
      return state;
  }
}
