import React from 'react';
import propTypes from 'prop-types';

const ReviewItem = (props) => {
  const { summary, rec, response } = props;

  return (
    <div className="itemTile">
      <li>
        <h4>
          {summary}
        </h4>
        <p>
          Recommended: {rec} ::::
          Response: {response}
        </p>
      </li>
    </div>
  );
};

export default ReviewItem;

ReviewItem.defaultProps = {
  response: '',
};

ReviewItem.propTypes = {
  summary: propTypes.string.isRequired,
  rec: propTypes.number.isRequired,
  response: propTypes.string,
};
