import { GET_PROJECT } from "../constant/projects";

export default function projectReducer(state = [], action) {
  switch (action.type) {
    case GET_PROJECT:
      return action.payload;
    default:
      return state;
  }
}
