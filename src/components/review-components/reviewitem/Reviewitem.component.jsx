import React from 'react';

const ReviewItem = (props) => {
  const { rating, summary, rec, response } = props;

  return (
    <li>
        Rating: {rating} ---
        Summary: {summary} ---
        Recommended: {rec} ---
        Response: {response} ---
    </li>
  );

};

export default ReviewItem;
