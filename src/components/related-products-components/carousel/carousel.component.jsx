/* eslint-disable react/prop-types */
/* eslint-disable no-sequences */
/* eslint-disable no-return-assign */
import React from 'react';
import propTypes from 'prop-types';
import Card from '../card/card.component';
import './carousel.styles.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { id, productStyles, products } = this.props;
    let currentStyle;
    return (
      <div className="rp-card-container">
        {products.map((relatedProduct) => (
          Array.isArray(productStyles)
            ? currentStyle = productStyles.filter(
              (style) => relatedProduct.id.toString() === style.product_id
            )
            : null,
            <Card
              id={id}
              relatedProduct={relatedProduct}
              productStyle={currentStyle}
              key={`${relatedProduct.id}-${currentStyle}`}
            />
        ))}
      </div>
    );
  }
}

Carousel.propTypes = {
  id: propTypes.string.isRequired,
};

export default Carousel;
