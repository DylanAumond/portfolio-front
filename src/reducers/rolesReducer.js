import { ADD_ROLE, DELETE_ROLE, GET_ROLES } from "../constant/roles";

const initialState = [];

export default function rolesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROLES:
      return action.payload;
    case ADD_ROLE:
      return [...state, action.payload];
    case DELETE_ROLE:
      return state.filter((role) => role._id !== action.payload);
    default:
      return state;
  }
}
