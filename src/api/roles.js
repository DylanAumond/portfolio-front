import { API} from "."
import * as constant from '../constant/roles'

// get all roles
export const getRoles = () => {
    return (dispatch) => {
      API.get('/roles')
        .then((res) => dispatch({ type: constant.GET_ROLES, payload: res.data }))
        .catch((err) => console.log(err))
    }
  }
  
  // create a new role
  export const createRole = (role) => {
    return (dispatch) => {
      API.post('/roles', role)
        .then((res) => dispatch({ type: constant.ADD_ROLE, payload: res.data }))
        .catch((err) => console.log(err))
    }
  }
  
  // delete a role
  export const deleteRole = (roleId) => {
    return (dispatch) => {
      API.delete(`/roles/${roleId}`).then(() =>
        dispatch({ type: constant.DELETE_ROLE, payload: roleId })
      )
    }
  }