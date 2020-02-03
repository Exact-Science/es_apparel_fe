/* eslint-disable consistent-return */
import React from 'react';
import propTypes from 'prop-types';
import RatingsSummary from './ratingssummary/ratingssummary.component';
import './ratings-styles.scss';

const Ratings = ({
  rating, recommended, getFilterValue, ratings, totalReviews, formattedRating,
}) => (
  <div className="ratingsContainer">
    <RatingsSummary
      rating={parseFloat(rating)}
      ratings={ratings}
      formattedRating={formattedRating}
      recommended={recommended}
      getFilterValue={getFilterValue}
      totalReviews={totalReviews}
    />
  </div>
);

export default Ratings;

Ratings.propTypes = {
  rating: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  ratings: propTypes.shape({}).isRequired,
  formattedRating: propTypes.shape({}).isRequired,
  recommended: propTypes.number.isRequired,
  getFilterValue: propTypes.func.isRequired,
  totalReviews: propTypes.number.isRequired,
};
