import * as constant from '../constant/projects'
import { API, API_FORM_DATA } from '.'

// get all projects
export const getProjects = () => {
    return (dispatch) => {
      API.get('/projects')
        .then((res) => dispatch({ type: constant.GET_PROJECTS, payload: res.data }))
        .catch((err) => console.log(err))
    }
  }
  
  // get a single project
  export const getProject = (id) => {
    return (dispatch) => {
      API.get(`/projects/${id}`)
        .then((res) => dispatch({ type: constant.GET_PROJECT, payload: res.data }))
        .catch((err) => console.log(err))
    }
  }
  
  // create a new project
  export const postProject = (project) => {
    return (dispatch) => {
        API_FORM_DATA.post('/projects', project)
        .then((res) => dispatch({ type: constant.ADD_PROJECT, payload: res.data }))
        .catch((err) => console.log(err))
    }
  }
  
  // update a project
  export const updateProject = (project, projectId) => {
    return (dispatch) => {
        API_FORM_DATA.patch('/projects/'+projectId, project)
        .then((res) => {
          return dispatch({ type: constant.UPDATE_PROJECT, payload: res.data })
        })
        .catch((err) => console.log(err))
    }
  }
  
  // delete a project
  export const deleteProject = (projectId) => {
    return (dispatch) => {
      API.delete(`/projects/${projectId}`).then(() =>
        dispatch({ type: constant.DELETE_PROJECT, payload: projectId })
      )
    }
  }