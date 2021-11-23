import { combineReducers } from "redux";
import profiles from "./profileReducer";
import projects from "./projectReducer";
import SearchResult from "./searchReducer";

const rootReducer = combineReducers({
  projects: projects,
  profiles: profiles,
  SearchResult: SearchResult,
});

export default rootReducer;
