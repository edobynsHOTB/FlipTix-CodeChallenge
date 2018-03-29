import axios from 'axios';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const GET_EVENTS = 'GET_EVENTS';

export function userAuth(user){
  return {
    type: AUTHENTICATE_USER,
    user
  }
}

export const getEvents = (key) => async dispatch => {
  axios.get('http://18.144.44.44:5000/api/v1/events', {
    headers: { 
      'api-key': 'hotbsoftware123456',
       'Authorization': key.Authorization
    }
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

