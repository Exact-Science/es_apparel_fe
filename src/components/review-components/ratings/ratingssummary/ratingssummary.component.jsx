import React from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import RatingsCharts from '../ratingscharts/ratingscharts.component';
import './ratingssummary-styles.scss';

const StyledRating = withStyles({
  iconFilled: {
    color: '#222',
  },
  iconHover: {
    color: '#222',
    opacity: '.5',
  },
})(Rating);

const RatingsSummary = ({
  rating, ratings, recommended, getFilterValue, totalReviews, formattedRating,
}) => (
  <div className="rating-overview">
    <div>
      <h1 className="rating-large">
        {rating}
        <StyledRating
          className="stars"
          name="rating-overview"
          value={parseFloat(rating)}
          size="medium"
          precision={0.25}
        />
      </h1>
    </div>
    <div>
      <h4 id="recommendations-summary">
        {recommended}
        % of reviewers recommend this product
      </h4>
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
  rating: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  ratings: propTypes.shape({}).isRequired,
  formattedRating: propTypes.shape({}).isRequired,
  recommended: propTypes.number.isRequired,
  getFilterValue: propTypes.func.isRequired,
  totalReviews: propTypes.number.isRequired,
};
