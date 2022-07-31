import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  GET_CUSTOMERS,
  UPDATE_CUSTOMER,
} from "../constant/customers";

export default function customersReducer(state = [], action) {
  switch (action.type) {
    // hydrate customers' reducer with all the customers
    case GET_CUSTOMERS:
      return action.payload;
    // add a customer to the reducer state
    case ADD_CUSTOMER:
      return [...state, action.payload];
    // delete a customer from the reducer state
    case DELETE_CUSTOMER:
      return state.filter((customer) => customer._id !== action.payload);
    // update a customer from the reducer state
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
