import React from 'react';
import propTypes from 'prop-types';

import styleData from '../../../exampleData/overview.styles';
import productData from '../../../exampleData/overview.product-info';

import ProductContainer from '../product-container/product-container.component';
import Gallery from '../gallery/gallery.component';

import './overview.styles.scss';

class Overview extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {
      productInfo: productData,
      productStyles: styleData.results,
      currentStyle: 'None',
      mainImage: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    };
  }

  componentDidMount() {
    const { id } = this.props;

    fetch(`http://3.134.102.30/products/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ productInfo: data }));
    fetch(`http://3.134.102.30/products/${id}/styles`)
      .then((res) => res.json())
      .then((data) => this.setState({
        productStyles: data.results,
        mainImage: data.results[0].photos[data.results[0]['default?']].url,
        currentStyle: data.results[0].name,
      }));
  }

  changeMainImage = (idx) => {
    const { productStyles } = this.state;

    this.setState({
      mainImage: productStyles[idx].photos[0].url,
      currentStyle: productStyles[idx].name,
    });
  }

  render() {
    const {
      productInfo,
      productStyles,
      mainImage,
      currentStyle,
    } = this.state;

    return (
      <div className="overview-container">
        <div className="gallery-container">
          <Gallery
            productStyles={productStyles[0]}
            mainImage={mainImage}
          />
        </div>
        <div className="product-container">
          <ProductContainer
            currentStyle={currentStyle}
            changeMainImage={this.changeMainImage}
            title={productInfo.name}
            styles={productStyles}
          />
        </div>
      </div>
    );
  }
}

export default Overview;

Overview.propTypes = {
  id: propTypes.string.isRequired,
};
