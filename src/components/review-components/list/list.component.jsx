import React from 'react';
import propTypes from 'prop-types';
import ReviewItem from '../item/item.component';
import './list-styles.scss';

const ReviewList = ({ reviews }) => (
  <div className="reviewListContainer">
    <h3>
      There are
      {reviews.length}
      reviews
    </h3>
    <ul>
      {reviews.map((review) => (
        <ReviewItem
          key={review.review_id}
          rating={review.rating}
          summary={review.summary}
          rec={review.recommend}
          response={review.response}
        />
      ))}
    </ul>
  </div>
);


export default ReviewList;

ReviewList.propTypes = {
  reviews: propTypes.arrayOf(propTypes.objects).isRequired,
};
