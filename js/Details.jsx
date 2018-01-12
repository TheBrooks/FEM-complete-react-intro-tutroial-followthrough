// @flow

import React from 'react';

const Details = (props: Object) => (
  <div className="details">
    <pre>
      <code>{JSON.stringify(props, null, 2)}</code>
    </pre>
  </div>
);

export default Details;
