// @flow

import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

test('Search renders correctly', () => {
  const component = shallow(
    <Search shows={preload.shows} searchTerm={''} handleSearchTermChange={function noop() {}} />
  );
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(
    <Search shows={preload.shows} searchTerm={''} handleSearchTermChange={function noop() {}} />
  );
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of show based on search term', () => {
  const searchWord = 'black';
  const component = shallow(
    <Search shows={preload.shows} searchTerm={searchWord} handleSearchTermChange={function noop() {}} />
  );

  component.find('input').simulate('change', { target: { value: searchWord } });
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  );
  expect(component.find(ShowCard).length).toEqual(showCount.length);
});
