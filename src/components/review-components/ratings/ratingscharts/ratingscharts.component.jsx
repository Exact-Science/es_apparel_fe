import React from 'react';
import propTypes from 'prop-types';
import RatingsChartItem from './ratingschartitem/ratingschartitem.component';
import './ratingscharts-styles.scss';

const RatingsCharts = ({ getFilterValue, ratings, totalReviews }) => {
  if (ratings.ratings) {
    return Object.keys(ratings.ratings).map((el, index) => {
      return (
        <div key={index}>
          <RatingsChartItem
            getFilterValue={getFilterValue}
            ratings={ratings.ratings}
            totalReviews={totalReviews}
            ratingVal={el}
            value={ratings.ratings[el]}
          />
        </div>
      );
    });
  }
  return null;
};

export default RatingsCharts;

RatingsCharts.propTypes = {
  getFilterValue: propTypes.func.isRequired,
  ratings: propTypes.arrayOf(propTypes.object).isRequired,
  totalReviews: propTypes.number.isRequired,
};
