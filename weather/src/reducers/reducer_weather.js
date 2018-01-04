import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // In Redux we never want to manipulate the state. Always return an entirely new state object
      // return state.concat([ action.payload.data ]);
      return [ action.payload.data, ...state ]; //ES6. Same as above line of code.
  }

  return state
}
