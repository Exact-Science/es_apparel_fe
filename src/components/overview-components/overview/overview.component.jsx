import React from 'react';
import propTypes from 'prop-types';
import './overview.styles.scss';

class Overview extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {
      productInfo: null,
      productStyles: [],
    };
  }

  componentDidMount() {
    const { id } = this.props;
    fetch(`http://3.134.102.30/products/${id}`)
      .then((data) => data.json())
      .then((result) => this.setState({ productInfo: result }));
    fetch(`http://3.134.102.30/products/${id}/styles`)
      .then((data) => data.json())
      .then((result) => this.setState({ productStyles: result.results }));
  }

  render() {
    const { productInfo, productStyles } = this.state;
    return (
      <div className="overview-container">
        <div className="product-info-container">
          {productInfo.name}
          {productStyles.name}
        </div>
      </div>
    );
  }
}

export default Overview;

Overview.propTypes = {
  id: propTypes.string.isRequired,
};
