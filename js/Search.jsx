// @flow

import React from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = (props: { searchTerm: string, shows: Array<Show>, handleSearchTermChange: Function }) => (
  <div className="search">
    <Header showSearch handleSearchTermChange={props.handleSearchTermChange} searchTerm={props.searchTerm} />
    <div>
      {props.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map(show => <ShowCard key={show.imdbID} show={show} />)}
    </div>
  </div>
);

export default Search;
