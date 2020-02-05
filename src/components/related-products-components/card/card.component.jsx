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
        {/* {productStyle ? console.log(productStyle[0].results[2].sale_price) : null} */}
        {/* <div className="image"><img src={productStyle ? productStyle[0].results[0].photos[0].url : null} /></div> */}
        {/* <div>{relatedProduct.category}</div>
        <div>{relatedProduct.name}</div> */}
        {/* <div>${relatedProduct.default_price}</div> */}
        {productStyle && parseInt(productStyle[0].results[0].sale_price) > 0
          ?
            <div className="rp-pricing-container">
              <span className="rp-pricing-default-strikethrough">${relatedProduct.default_price}</span>
              <span className="rp-pricing-sale"> ${productStyle[0].results[0].sale_price}</span>
            </div>
          :
            productStyle
              ?
                <div className="rp-pricing-container">
                  <span className="rp-pricing-default">${relatedProduct.default_price}</span>
                </div>
              :
                null
          }
      </div>
    );
  }
}

Card.propTypes = {
  relatedProduct: propTypes.shape({}).isRequired,
  productStyle: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default Card;
