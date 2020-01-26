import React from 'react';
import propTypes from 'prop-types';
import './reviewlistheader-styles.scss';

const ReviewListHeader = ({ reviewCount }) => (
  <h3>
    {`There are ${reviewCount} reviews, sorted by: 'dropdown box here'`}
  </h3>
);

export default ReviewListHeader;

ReviewListHeader.propTypes = {
  reviewCount: propTypes.number.isRequired,
};
