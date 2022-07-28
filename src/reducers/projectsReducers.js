import {
  ADD_PROJECT,
  DELETE_PROJECT,
  GET_PROJECTS,
  UPDATE_PROJECT,
} from "../constant/projects";

export default function projectsReducer(state = [], action) {
  switch (action.type) {
    case GET_PROJECTS:
      state = action.payload;
      return state;
    case ADD_PROJECT:
      return [...state, action.payload];
    case UPDATE_PROJECT:
      console.log(action.payload);
      return state.map((project) => {
        if (project._id === action.payload._id) {
          return action.payload;
        } else return project;
      });
    case DELETE_PROJECT:
      return state.filter((project) => project._id !== action.payload);
    default:
      return state;
  }
}
