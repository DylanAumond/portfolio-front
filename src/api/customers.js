import * as constant from "../constant/customers";
import { API, API_FORM_DATA } from ".";
import { ADD_TOAST } from "../constant/toasts";

// get all the customers
export const getCustomers = () => {
  return dispatch => {
    API.get("/customers")
      .then(res =>
        dispatch({ type: constant.GET_CUSTOMERS, payload: res.data })
      )
      .catch(err => console.log(err));
  };
};

// get a customer by id
export const getCustomer = id => {
  return dispatch => {
    API.get("/customers/" + id)
      .then(res => dispatch({ type: constant.GET_CUSTOMER, payload: res.data }))
      .catch(err => console.log(err));
  };
};

// create a new customer
export const postCustomer = customer => {
  return dispatch => {
    API_FORM_DATA.post("/customers", customer)
      .then(res => {
        dispatch({
          type: ADD_TOAST,
          payload: {
            text: "Customer create!",
            color: "green-600",
            icon: "checked",
          },
        });
        return dispatch({ type: constant.ADD_CUSTOMER, payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: ADD_TOAST,
          payload: {
            text: `${err}`,
            color: "green-600",
            icon: "checked",
          },
        });
      });
  };
};

// update a customer
export const updateCustomer = (customer, customerId) => {
  return dispatch => {
    API_FORM_DATA.patch("/customers/" + customerId, customer)
      .then(res => {
        return dispatch({ type: constant.UPDATE_CUSTOMER, payload: res.data });
      })
      .catch(err => console.log(err));
  };
};

// delete a customer
export const deleteCustomer = customerId => {
  return dispatch => {
    API.delete(`/customers/${customerId}`).then(() =>
      dispatch({ type: constant.DELETE_CUSTOMER, payload: customerId })
    );
  };
};
