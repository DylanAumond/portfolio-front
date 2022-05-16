import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  GET_CUSTOMERS,
  UPDATE_CUSTOMER,
} from "../constant/customers";

export default function customersReducer(state = [], action) {
  switch (action.type) {
    case GET_CUSTOMERS:
      return action.payload;
    case ADD_CUSTOMER:
      return [...state, action.payload];
    case DELETE_CUSTOMER:
      return state.filter((customer) => customer._id !== action.payload);
    case UPDATE_CUSTOMER:
      return state.map((customer) => {
        if (customer._id === action.payload._id) {
          return action.payload;
        } else return customer;
      });
    default:
      return state;
  }
}
