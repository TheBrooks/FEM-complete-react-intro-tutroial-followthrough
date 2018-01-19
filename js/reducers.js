/*
  a reducer is anyhting that takes a state and action and returns a new state
*/
import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
  searchTerm: ''
};

// do not modify the original state
// must return a new state object
const setSearchTerm = (state, action) => Object.assign({}, state, { searchTerm: action.payload });

// no side effects is essential for redux
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
};

export default rootReducer;
