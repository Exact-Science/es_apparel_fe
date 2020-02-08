/* eslint-disable react/no-array-index-key */
import React from 'react';
import propTypes from 'prop-types';
import RatingsChartItem from './ratingschartitem/ratingschartitem.component';
import './ratingscharts-styles.scss';

const RatingsCharts = ({
  getFilterValue, ratings, totalReviews, formattedRating,
}) => {
  if (ratings.ratings) {
    return Object.keys(formattedRating).reverse().map((el, index) => (
      <div className="ratingchart-item" key={index}>
        <RatingsChartItem
          id={el.id}
          getFilterValue={getFilterValue}
          formattedRating={formattedRating}
          totalReviews={totalReviews}
          ratingVal={el}
          value={formattedRating[el]}
        />
      </div>
    ));
  }
  return null;
};

export default RatingsCharts;

RatingsCharts.propTypes = {
  getFilterValue: propTypes.func.isRequired,
  formattedRating: propTypes.shape({}).isRequired,
  totalReviews: propTypes.number.isRequired,
};
