import { ADD_TOAST, DELETE_TOAST, GET_TOASTS } from "../constant/toasts";

export default function toastsReducer(state = [], action) {
  switch (action.type) {
    case GET_TOASTS:
      return action.payload;
    case ADD_TOAST:
      return [...state, action.payload];
    case DELETE_TOAST:
      return state.filter((toast) => state.indexOf(toast) !== action.payload);
    default:
      return state;
  }
}
