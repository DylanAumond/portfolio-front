import {
  ADD_PROJECT,
  DELETE_PROJECT,
  GET_PROJECT,
  GET_PROJECTS,
  UPDATE_PROJECT,
} from "../constant/projects";

const initState = {
  projects: [],
  project: undefined
}

export default function projectsReducer(state = initState, action) {
  switch (action.type) {
    // hydrate projects state with list of projects
    case GET_PROJECTS:
      return state = {
        project: undefined,
        projects: action.payload
      }
    // hydrate project state with a project
    case GET_PROJECT:
      return state = {
        ...state,
        project: action.payload
      }
    
    // add a project to the list of project
    case ADD_PROJECT:
      return state ={
        ...state,
        projects:[...state.projects, action.payload]
      };

    // update the project state
    case UPDATE_PROJECT:
      return state = {
        ...state,
        project: action.payload
      }

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((project) => project._id !== action.payload)
      }

    default:
      return state;
  }
}
