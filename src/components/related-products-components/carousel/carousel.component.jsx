import React from 'react';
import propTypes from 'prop-types';
import Card from '../card/card.component';
import './carousel.styles.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterCount: 4,
      products: [],
      filteredProducts: [],
      productStyles: [],
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
        this.state.products.map((product) => {
          promiseArray.push(
            fetch(`http://3.134.102.30/products/${id}/styles`)
              .then((results) => results.json()),
          );
        });
      })
      .then(() => Promise.all(promiseArray))
      .then((productStyles) => this.setState({ productStyles }));
  }

  render() {
    const { filteredProducts, productStyles } = this.state;
    return (
      <div className="rp-carousel-container">
        {filteredProducts.map((
          relatedProduct,
        ) => <Card relatedProduct={relatedProduct} productStyles={productStyles} key={`${relatedProduct}`} />)}
      </div>
    );
  }
}

Carousel.propTypes = {
  id: propTypes.string.isRequired,
};

export default Carousel;
