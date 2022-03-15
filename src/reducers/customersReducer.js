import { GET_CUSTOMERS } from "../constant/customers";

const initialState = [];

export default function customersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERS:
      return action.payload;
    default:
      return state;
  }
}
