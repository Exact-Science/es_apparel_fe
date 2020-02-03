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

  componentDidMount() {
    const { id } = this.props;
    fetch(`http://3.134.102.30/products/${id}/related`)
      .then((results) => results.json())
      .then((relatedProductIds) => this.setState({ relatedProductIds }));
  }

  render() {
    const { id } = this.props;
    const { relatedProductIds } = this.state;
    return (
      <div className="rp-container">
        <p>
          <span>RELATED PRODUCTS - Product ID: {id}</span>
          <Carousel id={id} relatedProductIds={relatedProductIds} />
        </p>
      </div>
    );
  }
}

RelatedProducts.propTypes = {
  id: propTypes.string.isRequired,
};

export default RelatedProducts;
