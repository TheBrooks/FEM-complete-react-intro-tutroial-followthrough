// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

class App extends React.Component {
  state = {
    searchTerm: 'appDefault'
  };
  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
    event.preventDefault();
  };
  renderLanding = (props: Object) => (
    <Landing searchTerm={this.state.searchTerm} handleSearchTermChange={this.handleSearchTermChange} {...props} />
  );
  renderSearch = (props: Object) => (
    <Search
      shows={preload.shows}
      searchTerm={this.state.searchTerm}
      handleSearchTermChange={this.handleSearchTermChange}
      {...props}
    />
  );
  render() {
    const FourOhFour = () => <h1>404</h1>;
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            {/* Switch renders exactly ONE Route component */}
            <Route exact path="/" component={this.renderLanding} />
            <Route path="/search" component={this.renderSearch} />
            <Route
              path="/details/:id"
              component={props => {
                return <Details show={preload.shows.find(show => props.match.params.id === show.imdbID)} {...props} />;
              }}
            />
            <Route component={FourOhFour} />
            {/* Order Matters so 404 has to be last */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
