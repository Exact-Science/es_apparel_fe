import React from 'react';
import propTypes from 'prop-types';
import ReviewList from '../list/list.component';
import Breakdown from '../breakdown/breakdown.component';
import './review.styles.scss';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      rating: 0,
    };
  }

  componentDidMount() {
    const { id } = this.props;

    fetch(`http://3.134.102.30/reviews/${id}/list`)
      .then((data) => data.json())
      .then((res) => this.setState({ count: res.count, reviews: res.results }))
      .catch((err) => err)
      .then(() => this.getRatings(this.state.reviews))
  }

  getRatings = (array) => {
    if (array.length > 0) {
      this.setState({ rating: array.map(el => el.rating).reduce((a, b) => (a + b) / array.length) });
    }
  }

  render() {
    const { reviews, rating } = this.state;
    return (
      <div className="reviewsContainer">
        <Breakdown rating={rating} />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default Review;

Review.propTypes = {
  id: propTypes.string.isRequired,
};
