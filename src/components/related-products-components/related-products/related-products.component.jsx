/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import propTypes from 'prop-types';
import Carousel from '../carousel/carousel.component';
import './related-products.styles.scss';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: [],
    };
  }

  render() {
    const { id } = this.props;
    const { relatedProductIds } = this.state;
    return (
      <div className="rp-container">
        <p>
          <span>RELATED PRODUCTS</span>
        </p>
        <Carousel id={id} />
      </div>
    );
  }
}

RelatedProducts.propTypes = {
  id: propTypes.string.isRequired,
};

export default RelatedProducts;
