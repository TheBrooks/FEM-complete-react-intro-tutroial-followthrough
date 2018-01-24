// @flow

import { createStore, compose } from 'redux';
import reducer from './reducers';

const store = createStore(
  reducer,
  compose(
    // for redux web dev tool extension
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : (f) => f
  )
);
// middlewares live here

export default store;
