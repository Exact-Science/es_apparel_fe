import React from 'react';

const ReviewItem = (props) => {
  const { rating, summary, rec, response } = props;

  return (
    <li>
      <p>
        Rating: {rating}
      </p>
      <p>
        Summary: {summary}
      </p>
      <p>
        Recommended: {rec}
      </p>
      <p>
        Response: {response}
      </p>
    </li>
  )

};

export default ReviewItem;
