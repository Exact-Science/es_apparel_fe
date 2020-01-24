import React from 'react';
import ReviewItem from '../item/item.component';
import './list-styles.scss';
// import propTypes from 'prop-types';

const ReviewList = ({ reviews }) => {
  return (
    <div className="reviewListContainer">
      <h3>There are {reviews.length} reviews</h3>
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
    </div>
  );
};

export default ReviewList;

// ReviewList.propTypes = {
//   reviews: propTypes.array

// }
