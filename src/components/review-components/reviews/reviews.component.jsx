import React from 'react';
import propTypes from 'prop-types';
import ReviewList from '../list/list.component';
import Ratings from '../ratings/ratings.component';
import './reviews-styles.scss';

class Reviews extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {
      reviews: [],
      sort: 'newest',
    };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    const { id } = this.props;
    const { sort } = this.state;
    fetch(`http://3.134.102.30/reviews/${id}/list?count=20&sort=${sort}`)
      .then((data) => data.json())
      .then((res) => this.setState({ reviews: res.results }))
      .catch((err) => err);
  }

  render() {
    const { reviews } = this.state;
    const { id } = this.props;
    return (
      <div className="reviewsContainer">
        <Ratings id={id} />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default Reviews;

Reviews.propTypes = {
  id: propTypes.string.isRequired,
};
