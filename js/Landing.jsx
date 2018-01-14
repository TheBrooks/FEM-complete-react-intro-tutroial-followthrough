// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';

class Landing extends React.Component {
  props: { searchTerm: string, handleSearchTermChange: Function, history: RouterHistory };
  goToSearch = () => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    return (
      <div className="landing" key="landing">
        <h1>sVideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            type="text"
            placeholder="Search"
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
          />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

export default Landing;
