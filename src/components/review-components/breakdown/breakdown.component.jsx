import React from 'react';
// import propTypes from 'prop-types';
import './breakdown-styles.scss'

class Breakdown extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {};
  }

  render() {
    return <div className="breakdownContainer">R&R Breakdown here</div>;
  }
}

export default Breakdown;
