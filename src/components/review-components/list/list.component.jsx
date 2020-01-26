import React from 'react';
import propTypes from 'prop-types';
import ReviewListHeader from '../reviewlistheader/reviewlistheader.component';
import ListItem from '../listitem/listitem.component';
import './list-styles.scss';

const ReviewList = ({ reviews, reviewCount, helpfulUtil }) => (
  <div className="reviewListContainer">
    <header>
      <ReviewListHeader reviewCount={reviewCount} />
    </header>
    {reviews.map((review) => (
      <ListItem
        key={review.review_id}
        id={review.review_id}
        rating={review.rating}
        user={review.reviewer_name}
        date={review.date}
        summary={review.summary}
        body={review.body}
        recommend={review.recommend}
        response={review.response}
        helpfulness={review.helpfulness}
        photos={review.photos}
      />
    ))}
  </div>
);

export default ReviewList;

ReviewList.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object).isRequired,
  reviewCount: propTypes.number.isRequired,
};
