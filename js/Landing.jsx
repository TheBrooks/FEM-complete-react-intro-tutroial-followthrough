// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

class Landing extends React.Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    handleSearchTermClear: Function,
    history: RouterHistory
  };
  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  clearSearchTerm = () => {
    event.preventDefault();
    // have to dispatch an event to clear search term?
    // cant just clear the property?
  };
  render() {
    return (
      <div className="landing">
        <h1>sVideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            type="text"
            placeholder="Search"
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
          />
        </form>
        <Link to="/search" onClick={this.props.handleSearchTermClear}>
          or Browse All
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
  handleSearchTermClear() {
    dispatch(setSearchTerm(''));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
