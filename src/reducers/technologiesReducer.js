import { GET_TECHNOLOGIES } from "../constant/technologies";
const initialState = [];

export default function technologiesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TECHNOLOGIES:
      return action.payload;
    default:
      return state;
  }
}
