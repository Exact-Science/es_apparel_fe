import React from 'react';
import propTypes from 'prop-types';
import './reviewlistheader-styles.scss';

const ReviewListHeader = ({ reviews }) => (
  <h3>
    {`There are ${reviews.length} reviews, sorted by `}
  </h3>
);

export default ReviewListHeader;

ReviewListHeader.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object).isRequired,
};
