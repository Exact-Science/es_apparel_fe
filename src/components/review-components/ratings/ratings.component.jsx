/* eslint-disable consistent-return */
import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import RatingsSummary from './ratingssummary/ratingssummary.component';
import Factors from './factors/factors.component';
import './ratings-styles.scss';

const Ratings = ({
  rating, recommended, getFilterValue, ratings, totalReviews, formattedRating, factors,
}) => (
  <div className="ratings-container">
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <RatingsSummary
          rating={parseFloat(rating)}
          ratings={ratings}
          formattedRating={formattedRating}
          recommended={recommended}
          getFilterValue={getFilterValue}
          totalReviews={totalReviews}
        />
      </Grid>
      <Grid item xs={12}>
        <Factors factors={factors} />
      </Grid>
    </Grid>
  </div>
);

export default Ratings;

Ratings.propTypes = {
  rating: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  ratings: propTypes.shape({}).isRequired,
  factors: propTypes.shape({}).isRequired,
  formattedRating: propTypes.shape({}).isRequired,
  recommended: propTypes.number.isRequired,
  getFilterValue: propTypes.func.isRequired,
  totalReviews: propTypes.number.isRequired,
};
