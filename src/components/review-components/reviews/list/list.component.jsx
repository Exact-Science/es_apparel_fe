import React from 'react';
import propTypes from 'prop-types';
import Button from '@material-ui/core/Button';
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
  enlargeImage,
  showFull,
}) => (
  <div className="reviewlist-header">
    <header>
      <ReviewListHeader
        reviews={reviews}
        totalReviews={totalReviews}
        handleChange={handleChange}
      />
    </header>
    <div className="reviewlist-container">
      {reviews.map((review) => {
        if (
          parseInt(filteredReviewsValue, 0) === 0
          || parseInt(filteredReviewsValue, 0) === review.rating
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
              enlargeImage={enlargeImage}
              showFull={showFull}
            />
          );
        }
        return null;
      })}
    </div>
    <div className="reviewlist-footer">
      <Button type="submit" variant="outlined" style={{ margin: 8 }} onClick={loadMoreReviews}>
        More Reviews
      </Button>
      <Button type="submit" variant="outlined" style={{ margin: 8 }} onClick={toggleModal}>
        Add a Review
      </Button>
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
  showFull: propTypes.bool.isRequired,
  enlargeImage: propTypes.func.isRequired,
};
