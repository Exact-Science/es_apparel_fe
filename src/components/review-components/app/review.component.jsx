import React from 'react';
import propTypes from 'prop-types';
import ReviewList from '../list/list.component';
import Metrics from '../metrics/metrics.component';
import './review-styles.scss';

class Reviews extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {
      count: 0,
      rating: 0,
      reviews: [],
      ratings: {}
    };
  }

  componentDidMount() {
    const { id } = this.props;

    fetch(`http://3.134.102.30/reviews/${id}/list`)
      .then((data) => data.json())
      .then((res) => this.setState({ reviews: res.results, count: res.count }))
      .catch((err) => err)
      .then(() => this.getRatings(this.state.reviews));

    fetch(`http://3.134.102.30/reviews/${id}/meta`)
      .then((res) => res.json())
      .then((res) => this.setState({ ratings: res}))
      .catch((err) => err);
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
        <Metrics rating={rating} id={this.props.id}/>
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default Reviews;

Reviews.propTypes = {
  id: propTypes.string.isRequired,
};
