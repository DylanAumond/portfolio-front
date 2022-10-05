import Cgu from "../components/Cgu";
import ContactForm from "../components/ContactForm";
import LoginForm from "../components/LoginForm";
import { Project } from "../components/Project";
import RegisterForm from "../components/RegisterForm";
import React from "react";
import { CGU, ClOSEMODAL, CONTACT, LOGIN, PROJECT, REGISTER } from "../constant/Modal";

export default function modalReducer(state = [], action) {
  switch (action.type) {
    // show the login form
    case LOGIN:
      return { show: true, component: <LoginForm /> };
    // show the registration form
    case REGISTER:
      return { show: true, component: <RegisterForm /> };
    // show the contact form
    case CONTACT:
      return { show: true, component: <ContactForm /> };
    // show a project
    case PROJECT :
      return { show: true, component: <Project project={action.project} /> };
    // show the CGU
    case CGU:
      return { show: true, component: <Cgu /> };
    // close the modal
    case ClOSEMODAL:
      return { show: false };
    // by default modal is close
    default:
      return { show: false };
  }
}
