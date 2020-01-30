/* eslint-disable consistent-return */
import React from 'react';
import propTypes from 'prop-types';
import Number from '../number/number.component';
import './ratings-styles.scss';

class Ratings extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {
      ratings: {},
      rating: 3.6,
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
        this.getAverage();
      });
    } catch (err) {
      return err;
    }
  }

  getAverage = () => {
    const { ratings: { ratings } } = this.state;
    const values = Object.values(ratings);
    const average = values.reduce((a, b) => a + b / values.length).toFixed(1);
    this.setState({ rating: average });
  }

  render() {
    const { rating } = this.state;
    return (
      <div className="ratingsContainer">
        <Number rating={parseFloat(rating)} />
      </div>
    );
  }
}

export default Ratings;

Ratings.propTypes = {
  id: propTypes.string.isRequired,
};
