import React from 'react';
// import propTypes from 'prop-types';
const Rating = ({ rating }) => (
  <div>
    <h2>Average Rating: {rating.toFixed(1)}</h2>
  </div>
);

export default Rating;
