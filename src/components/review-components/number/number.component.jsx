import React from 'react';
import propTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import './number-styles.scss';


const Number = ({ rating, recommended }) => (
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
  </div>
);

export default Number;

Number.propTypes = {
  rating: propTypes.number.isRequired,
  recommended: propTypes.number.isRequired,
};
