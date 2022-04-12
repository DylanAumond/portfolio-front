import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { ClOSEMODAL, LOGIN, REGISTER } from "../constant/Modal";

const initialState = [];

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { show: true, component: <LoginForm /> };
    case REGISTER:
      return { show: true, component: <RegisterForm /> };
    case ClOSEMODAL:
      return { show: false };
    default:
      return { show: false };
  }
}
