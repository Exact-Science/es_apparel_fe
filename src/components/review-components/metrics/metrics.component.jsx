import React from 'react';
// import propTypes from 'prop-types';
import Number from '../number/number.component';
import './metrics-styles.scss';

class Metrics extends React.Component {
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
          ratings: data,
        })
      )
      .catch(err => err);
  }

  render() {
    const { rating } = this.props;
    return (
      <div className="breakdownContainer">
        <Number rating={rating} />
      </div>
    );
  }
}

export default Metrics;
