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
    case GET_TECHNOLOGIES:
      return state = 
      {
        ...state,
        technologies: action.payload
      };

    case GET_TECHNOLOGY:
      return state = {
        ...state,
        technology: action.payload
      }

    case ADD_TECHNOLOGY:
      return {
        ...state,
        technologies: [...state.technologies,action.payload]
      };

    case DELETE_TECHNOLOGY:
      return {
        ...state,
        technologies: state.technologies.filter((technology) => technology._id !== action.payload)
      };

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
