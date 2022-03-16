import { combineReducers } from "redux";
import customersReducer from "./customersReducer";
import projectsReducer from "./projectsReducers";
import technologiesReducer from "./technologiesReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
  customersReducer,
  projectsReducer,
  technologiesReducer,
  projectReducer,
});
