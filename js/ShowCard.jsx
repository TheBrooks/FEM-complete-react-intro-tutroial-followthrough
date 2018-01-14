// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class ShowCard extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  props: { show: Show };
  render() {
    return (
      <Wrapper to={`/details/${this.props.show.imdbID}`}>
        <Image alt={`${this.props.show.title} Show Poster`} src={`/public/img/posters/${this.props.show.poster}`} />
        <div>
          <h3>{this.props.show.title}</h3>
          <h4>({this.props.show.year})</h4>
          <p>{this.props.show.description}</p>
        </div>
      </Wrapper>
    );
  }
}

export default ShowCard;
