import { GET_USERS } from "../constant/users";

const initState = {
    users: [],
    user: undefined
}

export default function usersReducer(state = initState, action) {
  switch (action.type) {
    case GET_USERS:
        return state = 
        {
          user: undefined,
          users: action.payload
        };
    /*case ADD_ROLE:
      return [...state, action.payload];
    case DELETE_ROLE:
      return state.filter((role) => role._id !== action.payload);*/
    default:
      return state;
  }
}