import React from 'react';
import propTypes from 'prop-types';
import ReviewListHeader from '../reviewlistheader/reviewlistheader.component';
import ListItem from '../listitem/listitem.component';
import './list-styles.scss';

const ReviewList = ({ reviews, handleChange }) => (
  <div className="reviewListHeader">
    <header>
      <ReviewListHeader reviews={reviews} handleChange={handleChange} />
    </header>
    <div className="reviewListContainer">
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
          images={review.photos}
        />
      ))}
    </div>
    <div className="reviewListFooter">
      <button type="submit"> More Reviews </button>
      <button type="submit"> Add a review + </button>
    </div>
  </div>
);

export default ReviewList;

ListItem.defaultProps = {
  response: '',
};

ReviewList.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object).isRequired,
};
