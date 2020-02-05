/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import propTypes from 'prop-types';
import Carousel from '../carousel/carousel.component';
import './related-products.styles.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: [],
    };
  }

  render() {
    const { id } = this.props;
    return (
      <div className="rp-container">
        <p>
          <span>RELATED PRODUCTS</span>
        </p>
        <div className="rp-carousel-container">
          <div id="arrow-back">
            <ArrowBackIosIcon className="arrow" />
          </div>
          <div id="arrow-forward">
            <ArrowForwardIosIcon className="arrow" />
          </div>
          <Carousel id={id} />
        </div>
      </div>
    );
  }
}

RelatedProducts.propTypes = {
  id: propTypes.string.isRequired,
};

export default RelatedProducts;
