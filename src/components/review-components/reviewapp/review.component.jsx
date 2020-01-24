import React from 'react';
import propTypes from 'prop-types';
import ReviewList from '../reviewlist/ReviewList-component';
import './review.styles.scss';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      reviews: [],
    };
  }

  componentDidMount() {
    const { id } = this.props;

    fetch(`http://3.134.102.30/reviews/${id}/list`)
      .then((data) => data.json())
      .then((res) => this.setState({ count: res.count, reviews: res.results }))
      .catch((err) => err);
  }

  render() {
    const { reviews, count } = this.state;

    return (
      <div>
        <ReviewList reviews={reviews} reviewCount={count} />
      </div>
    );
  }
}

export default Review;

Review.propTypes = {
  id: propTypes.string.isRequired,
};
