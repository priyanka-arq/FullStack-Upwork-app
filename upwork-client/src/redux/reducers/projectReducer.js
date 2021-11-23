import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import initialState from "../../utils/newProject";

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_PROJECTS":
      return action.projects;
    case "CREATE_PROJECT":
      return [...state, { ...action.project }];
    case "UPDATE_PROJECT":
      return state.map((project) => {
        if (project._id === action.projectId) {
          return {
            ...project,
            ...action.updates,
          };
        } else {
          return project;
        }
      });
    default:
      return state;
  }
}
