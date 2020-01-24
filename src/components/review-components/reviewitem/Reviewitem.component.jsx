import React from 'react';

const ReviewItem = (props) => {
  const { rating, summary, rec, response } = props;

  return (
    <li>
      <p>
        Rating: {rating} ---
        Summary: {summary} ---
        Recommended: {rec} ---
        Response: {response} ---
      </p>
    </li>
  );

};

export default ReviewItem;
