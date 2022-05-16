import {
  ADD_TECHNOLOGY,
  DELETE_TECHNOLOGY,
  GET_TECHNOLOGIES,
  UPDATE_TECHNOLOGY,
} from "../constant/technologies";

export default function technologiesReducer(state = [], action) {
  switch (action.type) {
    case GET_TECHNOLOGIES:
      return (state = action.payload);
    case ADD_TECHNOLOGY:
      return [...state, action.payload];
    case DELETE_TECHNOLOGY:
      return state.filter((technology) => technology._id !== action.payload);
    case UPDATE_TECHNOLOGY:
      return state.map((technology) => {
        if (technology._id === action.payload._id) {
          return action.payload;
        } else return technology;
      });
    default:
      return state;
  }
}
