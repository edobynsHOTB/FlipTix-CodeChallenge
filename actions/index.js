import axios from 'axios'
import { headers, API_URL } from '../utils/api';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER',
  GET_EVENTS = 'GET_EVENTS',
  LOGOUT_USER = 'LOGOUT_USER';

// Login a user             
export const loginUser = (body) => async dispatch => {
  axios.post(API_URL + '/login', body, {
    headers
  }).then((response) => {
    dispatch(userAuth(Object.assign(response.data, body)));
  })
    .catch((error) => {
      console.log(error)
    })
}

// Authenticate a user
export function userAuth(user) {
  return {
    type: AUTHENTICATE_USER,
    user
  }
}

// Get all events
export const getEvents = (key) => async dispatch => {
  axios.get(API_URL + '/events', {
    headers: Object.assign(headers, {'Authorization': key.Authorization}),
  }).then((event) => {
    dispatch({
      type: GET_EVENTS,
      event
    });
  })
    .catch((error) => {
      console.log(error)
    })
  }

// Logout user
export const logoutUser = (data) => async dispatch => {
  const body = {
    username: data.username,
    password: data.password
  }
  axios.post(API_URL + '/logout', body, {
    headers: Object.assign(headers, { 'Authorization': data.Authorization }),
  }).then((userInfo) => {
    const user = userInfo.data.message;

    dispatch({
      type: LOGOUT_USER,
      user: false
    });
  })
    .catch((error) => {
      console.log(error)
    })
}

