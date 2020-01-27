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
      count: 2,
    };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    const { id } = this.props;
    const { sort, count } = this.state;
    fetch(`http://3.134.102.30/reviews/${id}/list?count=${count}&sort=${sort}`)
      .then((data) => data.json())
      .then((res) => this.setState({ reviews: res.results }))
      .catch((err) => err);
  }

  handleChange = async (e) => {
    await this.setState({ sort: e.target.value });
    this.refresh();
  }

  loadMoreReviews = async () => {
    const { count } = this.state;
    await this.setState({ count: count + 2 });
    this.refresh();
    console.log(count)
  }

  render() {
    const { reviews } = this.state;
    const { id } = this.props;
    return (
      <div className="reviewsContainer">
        <Ratings id={id} />
        <ReviewList
          reviews={reviews}
          handleChange={this.handleChange}
          loadMoreReviews={this.loadMoreReviews}
        />
      </div>
    );
  }
}

export default Reviews;

Reviews.propTypes = {
  id: propTypes.string.isRequired,
};
