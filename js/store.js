import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);
// middlewares live here

export default store;
