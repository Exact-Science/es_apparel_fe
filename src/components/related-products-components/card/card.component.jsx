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
        {/* {console.log(productStyles.results)} */}
        <div className="image"><img src={productStyle ? productStyle[0].results[0].photos[0].url : null} /></div>
        <div>{relatedProduct.category}</div>
        <div>{relatedProduct.name}</div>
        <div>${relatedProduct.default_price}</div>
      </div>
    );
  }
}

Card.propTypes = {
  relatedProduct: propTypes.shape({}).isRequired,
  productStyle: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default Card;
