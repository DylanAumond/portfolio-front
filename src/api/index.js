import axios from 'axios'

// get the xrsf token from the localStorage
const xsrf_token = localStorage.getItem('xsrf_token')

// use for get/delete requests
export const API = axios.create({
  // api url
  baseURL: process.env.REACT_APP_API_URL,
  // allow credentials
  withCredentials: true,
  // set the header of the request
  headers: {
    'Content-Type': 'application/json',
    // set the xsrf token
    'x-xsrf-token': xsrf_token,
  },
})

// use for create/update requests
export const API_FORM_DATA = axios.create({
  // api url
  baseURL: process.env.REACT_APP_API_URL,
  // allow credentials
  withCredentials: true,
  // set the header of the request
  headers: {
    'Content-type': 'multipart/form-data',
    'x-xsrf-token': xsrf_token,
  },
})

/*
// intercept http code from the response
API.interceptors.response.use(
  // if code is not an error continue processing
  (res) => res,
  // else interact with the error handler
  (error) => {
    // get the http code from the response
    let code = error.response.status
    switch (code) {
      // on http code 403 redirect
      case 403: {
        return (window.location.href = '/403')
      }
      // on http code 404 redirect
      case 404: {
        return (window.location.href = '/404')
      }
      default: {
        return error
      }
    }
  }
)*/
