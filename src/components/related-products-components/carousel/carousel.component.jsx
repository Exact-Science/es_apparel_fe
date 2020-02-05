/* eslint-disable no-sequences */
/* eslint-disable no-return-assign */
import React from 'react';
import propTypes from 'prop-types';
import Card from '../card/card.component';
import styleData from '../../../exampleData/overview.styles';
import './carousel.styles.scss';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardStartNum: 0,
      cardEndNum: 4,
      filterCount: 4,
      products: [],
      filteredProducts: [],
      productStyles: styleData,
    };
  }

  componentDidMount() {
    const { id } = this.props;
    const { filterCount } = this.state;
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
        filteredProducts: resolvedProducts.slice(0, filterCount),
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

  render() {
    const { filteredProducts, productStyles, products } = this.state;
    const { id } = this.props;
    let currentStyle;
    return (
      <div className="rp-carousel">
        {/* <div className="navigation-arrows">
          <div id="arrow-back"><ArrowBackIosIcon className="arrow" /></div>
          <div id="arrow-forward"><ArrowForwardIosIcon className="arrow" /></div>
        </div> */}
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
      </div>
    );
  }
}

Carousel.propTypes = {
  id: propTypes.string.isRequired,
};

export default Carousel;
