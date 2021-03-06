import { combineReducers } from "redux";
import customersReducer from "./customersReducer";
import projectsReducer from "./projectsReducers";
import technologiesReducer from "./technologiesReducer";
import projectReducer from "./projectReducer";
import modalReducer from "./modalReducer";
import rolesReducer from "./rolesReducer";
import toastsReducer from "./toastsReducer";

export default combineReducers({
  customersReducer,
  projectsReducer,
  technologiesReducer,
  projectReducer,
  modalReducer,
  rolesReducer,
  toastsReducer,
});
