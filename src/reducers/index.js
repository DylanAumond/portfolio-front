import { combineReducers } from "redux";
import customersReducer from "./customersReducer";
import projectsReducer from "./projectsReducers";
import technologiesReducer from "./technologiesReducer";
import modalReducer from "./modalReducer";
import rolesReducer from "./rolesReducer";
import toastsReducer from "./toastsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  customersReducer,
  projectsReducer,
  technologiesReducer,
  modalReducer,
  rolesReducer,
  toastsReducer,
  usersReducer,
});
