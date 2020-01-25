import React from 'react';
import propTypes from 'prop-types';
import ReviewListHeader from '../reviewlistheader/reviewlistheader.component';
import ListItemHeader from '../listitemheader/listitemheader.component';
import ListItemBody from '../listitembody/listitembody.component';
import './list-styles.scss';

const ReviewList = ({ reviews, reviewCount }) => (
  <div className="reviewListContainer">
    <header>
      <ReviewListHeader reviewCount={reviewCount} />
    </header>
    {reviews.map((review) => (
      <ul key={review.review_id}>
        <header>
          <ListItemHeader
            rating={review.rating}
            user={review.reviewer_name}
            date={review.date}
          />
        </header>
        <ListItemBody
          summary={review.summary}
          body={review.body}
        />
      </ul>
    ))}
  </div>
);

export default ReviewList;

ReviewList.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object).isRequired,
  reviewCount: propTypes.number.isRequired,
};
