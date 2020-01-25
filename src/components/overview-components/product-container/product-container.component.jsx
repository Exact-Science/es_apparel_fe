import React from 'react';
import propTypes from 'prop-types';

import CustomTitle from '../custom-title/custom-title.component';
import StylesContainer from '../styles-container/styles-container.component';

import './product-container.styles.scss';

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
    } = this.props;

    return (
      <>
        <div className="title-container">
          <CustomTitle
            title={title}
          />
        </div>
        <h3>
          {`$${styles[0].original_price}`}
        </h3>
        <StylesContainer
          currentStyle={currentStyle}
          changeMainImage={changeMainImage}
          styles={styles}
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
};
