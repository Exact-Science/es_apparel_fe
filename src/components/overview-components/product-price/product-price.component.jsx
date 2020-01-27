import React from 'react';
import propTypes from 'prop-types';

import './product-price.styles.scss';

const ProductPrice = ({ originalPrice, salesPrice }) => (
  <div className="product-price">
    <h3
      style={salesPrice !== '0' ? { textDecoration: 'line-through' } : null}
    >
      {`$${originalPrice}`}
    </h3>
    <h3 style={salesPrice !== '0' ? { color: 'red' } : { visibility: 'hidden' }}>
      &nbsp;
      {`$${salesPrice}`}
    </h3>
  </div>
);

export default ProductPrice;

ProductPrice.propTypes = {
  originalPrice: propTypes.string.isRequired,
  salesPrice: propTypes.string.isRequired,
};
