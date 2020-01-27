import React from 'react';
import propTypes from 'prop-types';
import './reviewlistheader-styles.scss';

const ReviewListHeader = ({ reviews, handleChange }) => (
  <h3>
    <span>{`There are ${reviews.length} reviews, sorted by `}</span>
    <select className="sortSelector" onChange={handleChange}>
      <option default value="newest">Newest</option>
      <option value="relevance">Relevance</option>
      <option value="helpful">Helpful</option>
    </select>
  </h3>
);

export default ReviewListHeader;

ReviewListHeader.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object).isRequired,
  handleChange: propTypes.func.isRequired,
};
