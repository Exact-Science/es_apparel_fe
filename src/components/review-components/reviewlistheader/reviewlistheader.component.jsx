import React from 'react';
import propTypes from 'prop-types';
import './reviewlistheader-styles.scss';

const ReviewListHeader = ({ reviewCount }) => (
  <h2>
    {`There are ${reviewCount} reviews, sorted by:`}
  </h2>
);

export default ReviewListHeader;

ReviewListHeader.propTypes = {
  reviewCount: propTypes.number.isRequired,
};
