import { API} from '.'
import { ADD_TOAST } from '../constant/toasts'


// login the user
export const login = (user) => {
    return (dispatch) => {
      API.post(`/users/login`, user)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem('xsrf_token', res.data)
            dispatch({
              type: ADD_TOAST,
              payload: {text: 'connexion réussite!',color: 'green-600',icon: 'checked',},
            })
          }
        })
        .catch((err) =>
          dispatch({
            type: ADD_TOAST,
            payload: {
              text: 'connexion échoué!',
              color: 'red-600',
              icon: 'error',
            },
          })
        )
    }
  }
  
  // create a new user
  export const register = (user) => {
    API.post('users', user)
  }

  // refresh the user token
  export const refreshToken = () => {
    API.post('/users/refreshToken')
    .then((res)=>res)
    .catch((err)=>console.log(err))
  }