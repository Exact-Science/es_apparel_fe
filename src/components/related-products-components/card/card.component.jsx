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
    const { relatedProduct } = this.props;
    return (
      <div className="rp-card-container">
        <div>{relatedProduct.category}</div>
        <div>{relatedProduct.name}</div>
        <div>${relatedProduct.default_price}</div>
      </div>
    );
  }
}

Card.propTypes = {
  relatedProduct: propTypes.shape({}).isRequired,
  productStyles: propTypes.shape({}).isRequired,
};

export default Card;
