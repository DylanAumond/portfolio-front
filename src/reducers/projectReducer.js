import { GET_PROJECT } from "../constant/projects";
const initialState = [];

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECT:
      return action.payload;
    default:
      return state;
  }
}
