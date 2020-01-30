import React from 'react';
import propTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import './number-styles.scss';


const Number = ({ rating }) => (
  <div className="ratingOverview">
    <h1>
      {rating}
    </h1>
    <div>
      <Rating name="rating-overview" value={rating} size="medium" precision={0.25} />
    </div>
  </div>
);

export default Number;

Number.propTypes = {
  rating: propTypes.number.isRequired,
};
