import React from 'react';
import propTypes from 'prop-types';

const ReviewItem = ({ summary, response }) => (
  <div className="itemTile">
    <li>
      <h4>{summary}</h4>
      <p>
        Response:
        {response}
      </p>
    </li>
  </div>
);

export default ReviewItem;

ReviewItem.defaultProps = {
  response: '',
};

ReviewItem.propTypes = {
  summary: propTypes.string.isRequired,
  response: propTypes.string,
};
