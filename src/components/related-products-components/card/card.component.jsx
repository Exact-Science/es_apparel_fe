/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable radix */
import React from 'react';
import propTypes from 'prop-types';
import './card.styles.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { relatedProduct, productStyle } = this.props;
    return (
      <div className="rp-card-container">
        <div className="image"><img src={productStyle ? productStyle[0].results[0].photos[0].url : null} alt="Related Product" /></div>
        <div>{relatedProduct.category}</div>
        <div>{relatedProduct.name}</div>
        {productStyle && productStyle[0].results[0].sale_price && parseInt(productStyle[0].results[0].sale_price) > 0
          ? (
            <div className="rp-pricing-container">
              <span className="rp-pricing-default-strikethrough">
                ${relatedProduct.default_price}
              </span>
              <span className="rp-pricing-sale"> ${productStyle[0].results[0].sale_price}</span>
            </div>
          )
          : null}
        {productStyle && !(parseInt(productStyle[0].results[0].sale_price) > 0)
          ? (
            <div className="rp-pricing-container">
              <span className="rp-pricing-default">${relatedProduct.default_price}</span>
            </div>
          )
          : null}

      </div>
    );
  }
}

Card.propTypes = {
  relatedProduct: propTypes.shape({
    category: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    default_price: propTypes.string.isRequired,
  }).isRequired,
  productStyle: propTypes.arrayOf(propTypes.shape({})),
};

export default Card;
