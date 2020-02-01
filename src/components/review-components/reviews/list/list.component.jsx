import React from 'react';
import propTypes from 'prop-types';
import ReviewListHeader from '../reviewlistheader/reviewlistheader.component';
import ListItem from '../listitem/listitem.component';
import './list-styles.scss';

const ReviewList = ({
  reviews,
  handleChange,
  loadMoreReviews,
  toggleModal,
  totalReviews,
  filteredReviewsValue,
}) => (
  <div className="reviewListHeader">
    <header>
      <ReviewListHeader
        reviews={reviews}
        totalReviews={totalReviews}
        handleChange={handleChange}
      />
    </header>
    <div className="reviewListContainer">
      {reviews.map((review) => {
        if (
          parseInt(filteredReviewsValue, 0) === 0 ||
          parseInt(filteredReviewsValue, 0) === review.rating
        ) {
          return (
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
          );
        }
        return null;
      })}
    </div>
    <div className="reviewListFooter">
      <button className="questions" type="submit" onClick={loadMoreReviews}>
        More Reviews
      </button>
      <button className="questions" type="submit" onClick={toggleModal}>
        Add a review +
      </button>
    </div>
  </div>
);


export default ReviewList;

ListItem.defaultProps = {
  response: '',
};

ReviewList.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object).isRequired,
  filteredReviewsValue: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  handleChange: propTypes.func.isRequired,
  loadMoreReviews: propTypes.func.isRequired,
  toggleModal: propTypes.func.isRequired,
  totalReviews: propTypes.number.isRequired,
};
