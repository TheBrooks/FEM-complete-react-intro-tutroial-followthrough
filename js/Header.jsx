// @flow

import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  static defaultProps = {
    showSearch: false,
    handleSearchTermChange: function noop() {},
    searchTerm: ''
  };
  shouldComponentUpdate(nextProps: { showSearch?: boolean, handleSearchTermChange?: Function, searchTerm?: string }) {
    if (
      nextProps.showSearch === this.props.showSearch &&
      nextProps.handleSearchTermChange === this.props.handleSearchTermChange &&
      nextProps.searchTerm === this.props.searchTerm
    ) {
      return false;
    }
    return true;
  }

  props: { showSearch?: boolean, handleSearchTermChange?: Function, searchTerm?: string };

  render() {
    let utilSpace;
    if (this.props.showSearch) {
      utilSpace = (
        <input
          onChange={this.props.handleSearchTermChange}
          value={this.props.searchTerm}
          type="text"
          placeholder="Search"
        />
      );
    } else {
      utilSpace = (
        <h2>
          <Link to="/search">{`< Back`}</Link>
        </h2>
      );
    }

    return (
      <header>
        <h1>
          <Link to="/">sVideo</Link>
        </h1>
        {utilSpace}
      </header>
    );
  }
}

export default Header;
