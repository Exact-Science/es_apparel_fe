import React from 'react';
// import propTypes from 'prop-types';
import Rating from '../rating/rating.component';
import './breakdown-styles.scss';

class Breakdown extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {
      ratings: {},
      recommended: {},
      characteristics: {}
    };
  }

  componentDidMount() {
    const { id } = this.props;

    fetch(`http://3.134.102.30/reviews/${id}/meta`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          ratings: data.ratings,
          recommended: data.recommended,
          characteristics: data.characteristics
        })
      )
      .catch(err => err);
  }

  render() {
    const { rating } = this.props;
    return (
      <div className="breakdownContainer">
        <Rating rating={rating} />
      </div>
    );
  }
}

export default Breakdown;
