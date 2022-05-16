import {
  ADD_PROJECT,
  DELETE_PROJECT,
  GET_PROJECTS,
} from "../constant/projects";

export default function projectsReducer(state = [], action) {
  switch (action.type) {
    case GET_PROJECTS:
      state = action.payload;
      return state;
    case ADD_PROJECT:
      return [...state, action.payload];
    case DELETE_PROJECT:
      return state.filter((project) => project._id !== action.payload);
    default:
      return state;
  }
}
