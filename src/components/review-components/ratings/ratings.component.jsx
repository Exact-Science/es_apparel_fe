/* eslint-disable consistent-return */
import React from 'react';
import propTypes from 'prop-types';
import RatingsSummary from './ratingssummary/ratingssummary.component';
import './ratings-styles.scss';

class Ratings extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {
      ratings: {},
      rating: 3.2,
      recommended: 92,
    };
  }

  componentDidMount() {
    this.getRatings();
  }

  getRatings = async () => {
    const { id } = this.props;
    try {
      const data = await fetch(`http://3.134.102.30/reviews/${id}/meta`);
      const results = await data.json();
      this.setState({ ratings: results }, () => {
        this.getPercentage();
        this.getOverallRating();
      });
    } catch (err) {
      return err;
    }
  }

  getOverallRating = () => {
    const { ratings: { ratings } } = this.state;
    const totalReviews = Object.values(ratings).reduce((a, b) => a + b);
    const entries = Object.entries(ratings);
    const totalValue = entries.map((el) => el[0] * el[1]).reduce((a, b) => a + b);
    const overallRating = (totalValue / totalReviews).toFixed(1);
    this.setState({ rating: overallRating });
  }

  getPercentage = () => {
    const { ratings: { recommended } } = this.state;
    const totalRecommendations = Object.values(recommended).reduce((a, b) => a + b);
    const percentage = Object.values(recommended)[1] / totalRecommendations;
    if (!isNaN(percentage)) {
      this.setState({ recommended: parseInt(percentage * 100, 0) });
    }
  }

  filterList = (e) => {
    console.log(e.target.value);
  };

  render() {
    const { rating, recommended } = this.state;
    return (
      <div className="ratingsContainer">
        <RatingsSummary rating={parseFloat(rating)} recommended={recommended} filterList={this.filterList} />
      </div>
    );
  }
}

export default Ratings;

Ratings.propTypes = {
  id: propTypes.string.isRequired,
};
