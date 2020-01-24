import React from 'react';
import ReviewItem from '../item/item.component';
import './list-styles.scss';
// import propTypes from 'prop-types';

const ReviewList = (props) => {
  const { reviews } = props;
  return (
    <div className="reviewListContainer">
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
