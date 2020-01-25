import React from 'react';
import propTypes from 'prop-types';
import Number from '../number/number.component';
import './metrics-styles.scss';

class Metrics extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {};
  }

  render() {
    const { rating } = this.props;
    return (
      <div className="metricsContainer">
        <Number rating={rating} />
      </div>
    );
  }
}

export default Metrics;

Metrics.propTypes = {
  rating: propTypes.number.isRequired,
};
