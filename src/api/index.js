import axios from "axios";
import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  GET_CUSTOMERS,
} from "../constant/customers";
import {
  ADD_PROJECT,
  DELETE_PROJECT,
  GET_PROJECT,
  GET_PROJECTS,
} from "../constant/projects";
import {
  ADD_TECHNOLOGY,
  DELETE_TECHNOLOGY,
  GET_TECHNOLOGIES,
} from "../constant/technologies";

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
  return (dispatch) => {
    axios("http://127.0.0.1:5000/customers", {
      method: "post",
      data: customer,
      headers: {
        "Content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        return dispatch({ type: ADD_CUSTOMER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteCustomer = (customerId) => {
  return (dispatch) => {
    API.delete(`/customers/${customerId}`).then(() =>
      dispatch({ type: DELETE_CUSTOMER, payload: customerId })
    );
  };
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
  return (dispatch) => {
    axios("http://127.0.0.1:5000/projects", {
      method: "post",
      data: project,
      headers: {
        "Content-type": "multipart/form-data",
      },
    })
      .then((res) => dispatch({ type: ADD_PROJECT, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const deleteProject = (projectId) => {
  return (dispatch) => {
    API.delete(`/projects/${projectId}`).then(() =>
      dispatch({ type: DELETE_PROJECT, payload: projectId })
    );
  };
};

export const getTechnologies = () => {
  return (dispatch) => {
    API.get("/technologies")
      .then((res) => dispatch({ type: GET_TECHNOLOGIES, payload: res.data }))
      .catch((err) => console.log(err));
  };
};
export const postTechnology = (technology) => {
  return (dispatch) => {
    axios("http://127.0.0.1:5000/technologies", {
      method: "post",
      data: technology,
      headers: {
        "Content-type": "multipart/form-data",
      },
    })
      .then((res) => dispatch({ type: ADD_TECHNOLOGY, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const deleteTechnology = (technologyId) => {
  return (dispatch) => {
    API.delete(`/technologies/${technologyId}`).then(() =>
      dispatch({ type: DELETE_TECHNOLOGY, payload: technologyId })
    );
  };
};
