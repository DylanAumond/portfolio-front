import {
  ADD_PROJECT,
  DELETE_PROJECT,
  GET_PROJECTS,
} from "../constant/projects";
const initialState = [];

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.payload;
    case ADD_PROJECT:
      return [...state, action.payload];
    case DELETE_PROJECT:
      return state.filter((project) => project._id !== action.payload);
    default:
      return state;
  }
}
