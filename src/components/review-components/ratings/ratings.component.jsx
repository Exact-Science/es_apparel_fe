import React from 'react';
import propTypes from 'prop-types';
import Number from '../number/number.component';
import './ratings-styles.scss';

class Ratings extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {
      ratings: {},
      rating: 4.7,
    };
  }

  componentDidMount() {
    const { id } = this.props;

    fetch(`http://3.134.102.30/reviews/${id}/meta`)
      .then((res) => res.json())
      .then((res) => this.setState({ ratings: res }))
      .catch((err) => err);
  }

  // getRatings = (array) => {
  //   if (array.length > 0) {
  //     this.setState({ rating: array.map((el) => el.rating).reduce((a, b) => (a + b) / array.length) });
  //   }
  // }

  render() {
    const { rating } = this.state;
    return (
      <div className="ratingsContainer">
        <Number rating={rating} />
      </div>
    );
  }
}

export default Ratings;

Ratings.propTypes = {
  id: propTypes.string.isRequired,
};
