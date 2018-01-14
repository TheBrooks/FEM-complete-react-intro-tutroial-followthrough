// @flow

import React from 'react';
import { render } from 'react-dom';
import Perf from 'react-addons-perf';
import App from './App';

// not to be shipped to production
window.Perf = Perf;
Perf.start();

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

// For Hot Module Replacement - module is only 'hot' on dev build
// anytime App changes, force a call renderApp to redraw
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
