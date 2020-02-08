import React from 'react';
import propTypes from 'prop-types';
import './reviewlistheader-styles.scss';

const ReviewListHeader = ({ handleChange, totalReviews }) => (
  <h3>
    <span>{`There are ${totalReviews} reviews, sorted by `}</span>
    <select className="sort-selector" onChange={handleChange}>
      <option default value="newest">Newest</option>
      <option value="relevance">Relevance</option>
      <option value="helpful">Helpful</option>
    </select>
  </h3>
);

export default ReviewListHeader;

ReviewListHeader.propTypes = {
  handleChange: propTypes.func.isRequired,
  totalReviews: propTypes.number.isRequired,
};
