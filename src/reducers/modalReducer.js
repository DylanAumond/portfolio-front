import ContactForm from "../components/ContactForm";
import LoginForm from "../components/LoginForm";
import { Project } from "../components/Project";
import RegisterForm from "../components/RegisterForm";
import { ClOSEMODAL, CONTACT, LOGIN, PROJECT, REGISTER } from "../constant/Modal";

export default function modalReducer(state = [], action) {
  switch (action.type) {
    case LOGIN:
      return { show: true, component: <LoginForm /> };
    case REGISTER:
      return { show: true, component: <RegisterForm /> };
    case CONTACT:
      return { show: true, component: <ContactForm /> };
    case PROJECT :
      return { show: true, component: <Project project={action.project} /> };
    case ClOSEMODAL:
      return { show: false };
    default:
      return { show: false };
  }
}
