import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        {/* Switch renders exactly ONE Route component */}
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={FourOhFour} />
        {/* Order Matters so 404 has to be last */}
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
