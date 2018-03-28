import { AUTHENTICATE_USER, GET_EVENTS } from '../actions/index';

function app (state={}, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
    const  user  = action.user;
    console.log(user)
      return {
        ...state,
        user
      }
    case GET_EVENTS: 
    const events = action.event;
    
    return {
      ...state,
      events
    }  
    default:
      return state
  }
}

export default app;