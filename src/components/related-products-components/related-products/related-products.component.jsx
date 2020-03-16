/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import propTypes from 'prop-types';
import './related-products.styles.scss';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
    const url = `http://3.134.102.30`;
    fetch(`${url}/products/${id}/related`)
      .then((results) => results.json())
      .then((ids) => [...new Set(ids)])
      .then((relatedProductIds) => relatedProductIds.map((productId) => promiseArray.push(
        fetch(`${url}/products/${productId}`)
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
          fetch(`${url}/products/${product.id}/styles`)
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

    const arrowOn = {
      className: 'rp-arrowOn',
      fontsizelarge: 'true',
      cursor: 'pointer',
      fontSize: '34',
    };

    const arrowOff = {
      className: 'rp-arrowOff',
      fontsizelarge: 'true',
      color: 'rgba(104,104,104,0.3)',
      fontSize: '34',
    };

    const filteredProducts = products.slice(cardStartNum, cardEndNum);
    return (
      <div className="rp-container">
        <div className="titleContainer">
          <div className="rp-title">
            <p>RELATED PRODUCTS</p>
          </div>
          <div className="arrow-container">
            <div className="rp-arrow-header">
              {cardStartNum <= 0
                ? <ChevronLeftIcon style={arrowOff} />
                : <ChevronLeftIcon style={arrowOn} onClick={this.reverseCards}/>}
            </div>
            <div className="rp-arrow-header">
              {cardEndNum < products.length + 1
                ? <ChevronRightIcon style={arrowOn} onClick={this.advanceCards} />
                : <ChevronRightIcon style={arrowOff} />}
            </div>
          </div>
        </div>
        <div className="rp-carousel-container">
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
