/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import propTypes from 'prop-types';
import './related-products.styles.scss';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { id } = this.props;
    return (
      <div className="rp-container">
        <p>
          <span>RELATED PRODUCTS - Product ID: {id}</span>
        </p>
      </div>
    );
  }
}

RelatedProducts.propTypes = {
  id: propTypes.string.isRequired,
}

export default RelatedProducts;
