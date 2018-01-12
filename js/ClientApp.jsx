import React from 'react';
import { render } from 'react-dom';
import App from './App';

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
