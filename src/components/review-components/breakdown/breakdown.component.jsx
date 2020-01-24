import React from 'react';
// import propTypes from 'prop-types';
import Rating from '../rating/rating.component';
import './breakdown-styles.scss';

class Breakdown extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {};
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
