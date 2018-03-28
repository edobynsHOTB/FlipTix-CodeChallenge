export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const GET_EVENTS = 'GET_EVENTS';

export function userAuth(user){
  return {
    type: AUTHENTICATE_USER,
    user
  }
}

export function getEvents(event){
  return {
    type: GET_EVENTS,
    event
  }
}