import React from 'react';
import propTypes from 'prop-types';
import ReviewList from '../list/list.component';
import Ratings from '../ratings/ratings.component';
import ReviewModal from '../reviewmodal/reviewmodal.component';
import './reviews-styles.scss';

class Reviews extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {
      reviews: [],
      sort: 'newest',
      count: 2,
      show: false,
    };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    const { id } = this.props;
    const { sort } = this.state;
    fetch(`http://3.134.102.30/reviews/${id}/list?count=1000&sort=${sort}`)
      .then((data) => data.json())
      .then((res) => this.setState({ reviews: res.results }))
      .catch((err) => err);
  }

  handleChange = (e) => {
    this.setState({ sort: e.target.value }, () => {
      this.refresh();
    });
  }

  loadMoreReviews = () => {
    const { count } = this.state;
    this.setState({ count: count + 2 });
  }

  toggleModal = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  render() {
    const { reviews, show, count } = this.state;
    const { id } = this.props;
    return (
      <div>
        <div className="reviewsContainer">
          <p>Ratings and Reviews</p>
          <Ratings id={id} />
          <ReviewList
            totalReviews={reviews.length}
            reviews={reviews.slice(0, count)}
            handleChange={this.handleChange}
            loadMoreReviews={this.loadMoreReviews}
            toggleModal={this.toggleModal}
          />
        </div>
        <div>
          <ReviewModal
            id={id}
            show={show}
            toggleModal={this.toggleModal}
          />
        </div>
      </div>
    );
  }
}

export default Reviews;

Reviews.propTypes = {
  id: propTypes.string.isRequired,
};
