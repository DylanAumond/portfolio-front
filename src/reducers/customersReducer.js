import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  GET_CUSTOMER,
  GET_CUSTOMERS,
  UPDATE_CUSTOMER,
} from "../constant/customers";

const initialState = [];

export default function customersReducer(state = initialState, action) {
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
