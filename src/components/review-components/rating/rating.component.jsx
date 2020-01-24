import React from 'react';
// import propTypes from 'prop-types';

const Rating = ({ rating }) => (
  <div>
    <h3>Average Rating: {rating.toFixed(1)}</h3>
  </div>
);

export default Rating;
