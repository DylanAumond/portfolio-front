import { API, API_FORM_DATA } from ".";
import * as constant from "../constant/technologies";
import { ADD_TOAST } from "../constant/toasts";

// get all the technologies
export const getTechnologies = () => {
  return dispatch => {
    API.get("/technologies")
      .then(res =>
        dispatch({ type: constant.GET_TECHNOLOGIES, payload: res.data })
      )
      .catch(err => console.log(err));
  };
};

export const getTechnology = id => {
  return dispatch => {
    API.get("/technologies/" + id)
      .then(res =>
        dispatch({ type: constant.GET_TECHNOLOGY, payload: res.data })
      )
      .catch(err => console.log(err));
  };
};

// create a new technology
export const postTechnology = technology => {
  return dispatch => {
    API_FORM_DATA.post("/technologies", technology)
      .then(res => {
        dispatch({
          type: ADD_TOAST,
          payload: {
            text: "Customer create!",
            color: "green-600",
            icon: "checked",
          },
        });
        return dispatch({ type: constant.ADD_TECHNOLOGY, payload: res.data });
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

// update a technology
export const updateTechnology = (technology, technologyId) => {
  return dispatch => {
    API_FORM_DATA.patch("/technologies/" + technologyId, technology)
      .then(res => {
        return dispatch({
          type: constant.UPDATE_TECHNOLOGY,
          payload: res.data,
        });
      })
      .catch(err => console.log(err));
  };
};

// delete a technology
export const deleteTechnology = technologyId => {
  return dispatch => {
    API.delete(`/technologies/${technologyId}`).then(() =>
      dispatch({ type: constant.DELETE_TECHNOLOGY, payload: technologyId })
    );
  };
};
