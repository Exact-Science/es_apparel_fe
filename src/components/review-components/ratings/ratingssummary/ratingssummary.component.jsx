import React from 'react';
import propTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import RatingsCharts from '../ratingscharts/ratingscharts.component';
import './ratingssummary-styles.scss';


const RatingsSummary = ({
  rating, ratings, recommended, getFilterValue, totalReviews, formattedRating,
}) => (
  <div className="ratingOverview">
    <div>
      <h1>
        {rating}
        <Rating className="stars" name="rating-overview" value={rating} size="medium" precision={0.25} />
      </h1>
    </div>
    <div>
      <h5>
        {recommended}
        % of reviewers recommend this product
      </h5>
    </div>
    <div className="ratingschart-container">
      <RatingsCharts
        getFilterValue={getFilterValue}
        ratings={ratings}
        formattedRating={formattedRating}
        totalReviews={totalReviews}
      />
    </div>
  </div>
);

export default RatingsSummary;

RatingsSummary.propTypes = {
  rating: propTypes.number.isRequired,
  ratings: propTypes.shape({}).isRequired,
  formattedRating: propTypes.shape({}).isRequired,
  recommended: propTypes.number.isRequired,
  getFilterValue: propTypes.func.isRequired,
  totalReviews: propTypes.number.isRequired,
};
