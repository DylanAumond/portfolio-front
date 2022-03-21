import axios from "axios";
import { GET_CUSTOMERS } from "../constant/customers";
import { GET_PROJECT, GET_PROJECTS } from "../constant/projects";
import { GET_TECHNOLOGIES } from "../constant/technologies";

export const API = axios.create({
  baseURL: "http://127.0.0.1:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCustomers = () => {
  return (dispatch) => {
    API.get("/customers")
      .then((res) => dispatch({ type: GET_CUSTOMERS, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const postCustomer = (customer) => {
  axios("http://127.0.0.1:5000/customers", {
    method: "post",
    data: customer,
    headers: {
      "Content-type": "multipart/form-data",
    },
  }).catch((err) => console.log(err));
};

export const getProjects = () => {
  return (dispatch) => {
    API.get("/projects")
      .then((res) => dispatch({ type: GET_PROJECTS, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const getProject = (libelle) => {
  return (dispatch) => {
    API.get(`/projects/${libelle}`)
      .then((res) => dispatch({ type: GET_PROJECT, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const postProject = (project) => {
  axios("http://127.0.0.1:5000/projects", {
    method: "post",
    data: project,
    headers: {
      "Content-type": "multipart/form-data",
    },
  }).catch((err) => console.log(err));
};

export const getTechnologies = () => {
  return (dispatch) => {
    API.get("/technologies")
      .then((res) => dispatch({ type: GET_TECHNOLOGIES, payload: res.data }))
      .catch((err) => console.log(err));
  };
};
export const postTechnology = (technology) => {
  axios("http://127.0.0.1:5000/technologies", {
    method: "post",
    data: technology,
    headers: {
      "Content-type": "multipart/form-data",
    },
  }).catch((err) => console.log(err));
};
