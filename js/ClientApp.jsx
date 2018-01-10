import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  return (
    <div id="my-first-component">
      <MyTitle title="Game of Thrones" color="YellowGreen" />
      <MyTitle title="Stranger Things" color="GreenYellow" />
      <MyTitle title="Rick and Morty" color="Red" />
      <MyTitle title="Simpsons" color="peru" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById('app'));
