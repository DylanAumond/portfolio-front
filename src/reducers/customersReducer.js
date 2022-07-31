import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  GET_CUSTOMER,
  GET_CUSTOMERS,
  UPDATE_CUSTOMER,
} from "../constant/customers";

const initState = {
  customers: [],
  customer: undefined
}

export default function customersReducer(state = initState, action) {
  switch (action.type) {
    // hydrate customers' reducer with all the customers
    case GET_CUSTOMERS:
      return state = {
        customer: undefined,
        customers: action.payload
      };

    // hydrate customer state with a customer
    case GET_CUSTOMER:
      return state = {
        ...state,
        customer: action.payload
      }
    
    // add a customer to the reducer state
    case ADD_CUSTOMER:
      return state ={
        ...state,
        customers: [...state.customers, action.payload]};

    // delete a customer from the reducer state
    case DELETE_CUSTOMER:
      return state = {
        ...state,
        customers: state.customers.filter((customer) => customer._id !== action.payload)
      };

    // update a customer from the reducer state
    case UPDATE_CUSTOMER:
      return state = {
        ...state,
        customer: action.payload
      };

    default:
      return state;
  }
}
