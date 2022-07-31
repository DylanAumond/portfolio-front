import {
  ADD_TECHNOLOGY,
  DELETE_TECHNOLOGY,
  GET_TECHNOLOGIES,
  GET_TECHNOLOGY,
  UPDATE_TECHNOLOGY,
} from "../constant/technologies";

const initState = {
  technologies: [],
  technology: undefined
}

export default function technologiesReducer(state = initState, action) {
  switch (action.type) {
    // set the technologies state
    case GET_TECHNOLOGIES:
      return state = 
      {
        technology: undefined,
        technologies: action.payload
      };

    // set the technology state
    case GET_TECHNOLOGY:
      return state = {
        ...state,
        technology: action.payload
      }

    // add a new technology to the technologies state
    case ADD_TECHNOLOGY:
      return {
        ...state,
        technologies: [...state.technologies,action.payload]
      };

    // remove a technology from the technologies state
    case DELETE_TECHNOLOGY:
      return {
        ...state,
        technologies: state.technologies.filter((technology) => technology._id !== action.payload)
      };

    // update the technology state
    case UPDATE_TECHNOLOGY:
      return {
        ...state,
        technology: action.payload
      }
      /*return state.map((technology) => {
        if (technology._id === action.payload._id) {
          return action.payload;
        } else return technology;
      });*/
    default:
      return state;
  }
}
