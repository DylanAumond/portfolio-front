import { combineReducers } from "redux";
import customersReducer from "./customersReducer";
import projectsReducer from "./projectsReducers";
import technologiesReducer from "./technologiesReducer";

export default combineReducers({
  customersReducer,
  projectsReducer,
  technologiesReducer,
});
