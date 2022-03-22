import {
  ADD_TECHNOLOGY,
  DELETE_TECHNOLOGY,
  GET_TECHNOLOGIES,
} from "../constant/technologies";
const initialState = [];

export default function technologiesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TECHNOLOGIES:
      return action.payload;
    case ADD_TECHNOLOGY:
      return [...state, action.payload];
    case DELETE_TECHNOLOGY:
      return state.filter((technology) => technology._id !== action.payload);
    default:
      return state;
  }
}
