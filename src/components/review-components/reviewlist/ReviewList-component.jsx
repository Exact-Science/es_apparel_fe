import React from 'react';
import ReviewItem from '../reviewitem/Reviewitem.component';
// import propTypes from 'prop-types';

const ReviewList = (props) => {
  const { reviews } = props;
  return (
    <ul>
      {reviews.map((review) => {
        return (
          <ReviewItem
            key={review.review_id}
            rating={review.rating}
            summary={review.summary}
            rec={review.recommend}
            response={review.response}
          />
        );
      })}
    </ul>
  );
};

export default ReviewList;

// ReviewList.propTypes = {
//   reviews: propTypes.array

// }
