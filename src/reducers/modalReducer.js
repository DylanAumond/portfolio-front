import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { ClOSEMODAL, LOGIN, REGISTER } from "../constant/Modal";

export default function modalReducer(state = [], action) {
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
