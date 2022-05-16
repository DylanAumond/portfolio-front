import axios from "axios";
import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  GET_CUSTOMERS,
  UPDATE_CUSTOMER,
} from "../constant/customers";
import {
  ADD_PROJECT,
  DELETE_PROJECT,
  GET_PROJECTS,
} from "../constant/projects";
import { ADD_ROLE, DELETE_ROLE, GET_ROLES } from "../constant/roles";
import {
  ADD_TECHNOLOGY,
  DELETE_TECHNOLOGY,
  GET_TECHNOLOGIES,
  UPDATE_TECHNOLOGY,
} from "../constant/technologies";
import { ADD_TOAST } from "../constant/toasts";

const xsrf_token = localStorage.getItem("xsrf_token");
export const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "x-xsrf-token": xsrf_token,
  },
});
/*
API.interceptors.response.use(
  (res) => res,
  (error) => {
    let code = error.response.status;
    switch (code) {
      case 403: {
        return (window.location.href = "/403");
      }
      case 404: {
        return (window.location.href = "/404");
      }
      default: {
        return error;
      }
    }
  }
);*/

export const getCustomers = () => {
  return (dispatch) => {
    API.get("/customers")
      .then((res) => dispatch({ type: GET_CUSTOMERS, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const postCustomer = (customer) => {
  return (dispatch) => {
    axios(process.env.REACT_APP_API_URL + "customers", {
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

export const updateCustomer = (customer, customerId) => {
  return (dispatch) => {
    axios(process.env.REACT_APP_API_URL + "customers/" + customerId, {
      method: "PATCH",
      data: customer,
      headers: {
        "Content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        return dispatch({ type: UPDATE_CUSTOMER, payload: res.data });
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

export const getProject = (id) => {
  return (dispatch) => {
    API.get(`/projects/${id}`)
      .then((res) => dispatch({ type: GET_PROJECTS, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const postProject = (project) => {
  return (dispatch) => {
    axios(process.env.REACT_APP_API_URL + "projects", {
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
    axios(process.env.REACT_APP_API_URL + "technologies", {
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

export const updateTechnology = (technology, technologyId) => {
  return (dispatch) => {
    axios(process.env.REACT_APP_API_URL + "technologies/" + technologyId, {
      method: "PATCH",
      data: technology,
      headers: {
        "Content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        return dispatch({ type: UPDATE_TECHNOLOGY, payload: res.data });
      })
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

export const login = (user) => {
  return (dispatch) => {
    API.post(`/users/login`, user).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("xsrf_token", res.data);
        dispatch({
          type: ADD_TOAST,
          payload: { text: "connexion réussite!", color: "green-600" },
        });
      } else {
        dispatch({
          type: ADD_TOAST,
          payload: { text: "connexion échoué!", color: "red-600" },
        });
      }
    });
  };
};

export const register = (user) => {
  API.post("users", user);
};

export const getRoles = () => {
  return (dispatch) => {
    API.get("/roles")
      .then((res) => dispatch({ type: GET_ROLES, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const createRole = (role) => {
  return (dispatch) => {
    API.post("/roles", role)
      .then((res) => dispatch({ type: ADD_ROLE, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const deleteRole = (roleId) => {
  return (dispatch) => {
    API.delete(`/roles/${roleId}`).then(() =>
      dispatch({ type: DELETE_ROLE, payload: roleId })
    );
  };
};
