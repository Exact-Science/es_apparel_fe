/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import propTypes from 'prop-types';
import './related-products.styles.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styleData from '../../../exampleData/overview.styles';
import Carousel from '../carousel/carousel.component';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: [],
      cardStartNum: 0,
      cardEndNum: 4,
      products: [],
      productStyles: styleData,
    };
  }

  componentDidMount() {
    const { id } = this.props;
    let promiseArray = [];
    fetch(`http://3.134.102.30/products/${id}/related`)
      .then((results) => results.json())
      .then((ids) => [...new Set(ids)])
      .then((relatedProductIds) => relatedProductIds.map((productId) => promiseArray.push(
        fetch(`http://3.134.102.30/products/${productId}`)
          .then((results) => results.json()),
      )))
      .then(() => Promise.all(promiseArray))
      .then((resolvedProducts) => this.setState({
        products: resolvedProducts,
      }))
      .then(() => {
        promiseArray = [];
        const { products } = this.state;
        products.map((product) => promiseArray.push(
          fetch(`http://3.134.102.30/products/${product.id}/styles`)
            .then((results) => results.json()),
        ));
      })
      .then(() => Promise.all(promiseArray))
      .then((productStyles) => this.setState({ productStyles }));
  }

  advanceCards = () => {
    this.setState((previousState) => ({
      cardStartNum: previousState.cardStartNum + 1,
      cardEndNum: previousState.cardEndNum + 1,
    }));
  }

  reverseCards = () => {
    this.setState((previousState) => ({
      cardStartNum: previousState.cardStartNum - 1,
      cardEndNum: previousState.cardEndNum - 1,
    }));
  }

  render() {
    const { id } = this.props;
    const {
      cardStartNum,
      cardEndNum,
      products,
      productStyles,
    } = this.state;
    const filteredProducts = products.slice(cardStartNum, cardEndNum);
    return (
      <div className="rp-container">
        <p>
          <span>RELATED PRODUCTS</span>
        </p>
        <div className="rp-carousel-container">
          {cardStartNum <= 0
            ? null
            : (
              <div id="arrow-back">
                <ArrowBackIosIcon className="arrow" fontsizelarge="true" onClick={this.reverseCards} />
              </div>
            )}
          {cardEndNum < products.length + 1
            ? (
              <div id="arrow-forward">
                <ArrowForwardIosIcon
                  className="arrow"
                  fontsizelarge="true"
                  onClick={this.advanceCards}
                />
              </div>
            )
            : null}
          <Carousel
            id={id}
            products={filteredProducts}
            productStyles={productStyles}
            cardStartNum={cardStartNum}
            cardEndNum={cardEndNum}
          />
        </div>
      </div>
    );
  }
}

RelatedProducts.propTypes = {
  id: propTypes.string.isRequired,
};

export default RelatedProducts;
