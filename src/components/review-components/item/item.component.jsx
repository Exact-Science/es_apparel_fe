import React from 'react';
import propTypes from 'prop-types';

const ReviewItem = (props) => {
  const { summary, rec, response } = props;

  return (
    <li>
      Summary: {summary}
      Recommended: {rec}
      Response: {response}
    </li>
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
