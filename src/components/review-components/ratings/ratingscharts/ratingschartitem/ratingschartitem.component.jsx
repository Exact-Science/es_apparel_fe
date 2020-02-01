import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { lighten, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const RatingsChartItem = ({ getFilterValue, value, totalReviews, ratingVal }) => {
  const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: lighten('#a5a5a5', 0.5),
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#a5a5a5',
    },
  })(LinearProgress);

  return (
    <div className="ratingschart-container">
      <Grid container>
        <Grid item xs={3}>
          <button
            className="chart-button"
            type="button"
            onClick={getFilterValue}
            value={ratingVal}
          >
            {ratingVal} stars
          </button>
        </Grid>
        <Grid item xs={8}>
          <BorderLinearProgress
            variant="determinate"
            color="secondary"
            value={value / totalReviews * 200}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default RatingsChartItem;