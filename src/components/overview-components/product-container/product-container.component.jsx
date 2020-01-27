import React from 'react';
import propTypes from 'prop-types';

import CustomTitle from '../custom-title/custom-title.component';
import StylesContainer from '../styles-container/styles-container.component';
import CheckoutContainer from '../checkout-container/checkout-container.component';

import './product-container.styles.scss';
import ProductPrice from '../product-price/product-price.component';

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      title,
      styles,
      changeMainImage,
      currentStyle,
      currentStyleIdx,
      category,
    } = this.props;

    return (
      <>
        <h3 style={{ marginBottom: 0 }}>
          {category}
        </h3>
        <div className="title-container">
          <CustomTitle
            title={title}
            style={{ marginTop: '10px' }}
          />
        </div>
        <ProductPrice
          originalPrice={styles[currentStyleIdx].original_price}
          salesPrice={styles[currentStyleIdx].sale_price}
        />
        <StylesContainer
          currentStyle={currentStyle}
          changeMainImage={changeMainImage}
          styles={styles}
        />
        <CheckoutContainer
          styles={styles}
          currentStyleIdx={currentStyleIdx}
        />
      </>
    );
  }
}

export default ProductContainer;

ProductContainer.propTypes = {
  title: propTypes.string.isRequired,
  styles: propTypes.arrayOf(propTypes.object).isRequired,
  changeMainImage: propTypes.func.isRequired,
  currentStyle: propTypes.string.isRequired,
  currentStyleIdx: propTypes.number.isRequired,
  category: propTypes.string.isRequired,
};
