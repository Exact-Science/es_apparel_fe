import React from 'react';
import propTypes from 'prop-types';

import styleData from '../../../exampleData/overview.styles';
import productData from '../../../exampleData/overview.product-info';

import ProductContainer from '../product-container/product-container.component';
import Gallery from '../gallery/gallery.component';
import FullscreenModal from '../fullscreen-modal/fullscreen-modal.component';

import './overview.styles.scss';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: productData,
      productStyles: styleData.results,
      currentStyle: 'None',
      currentStyleIdx: 0,
      mainImage: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      fullscreen: false,
      mainImageIdx: 0,
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
        mainImage: data.results[0].photos[0].url,
        currentStyle: data.results[0].name,
      }));
  }

  changeMainImage = (idx, component, arrow) => {
    const { productStyles, currentStyleIdx } = this.state;

    if (component === 'thumbnail') {
      this.setState({
        mainImage: productStyles[currentStyleIdx].photos[idx].url,
        mainImageIdx: idx,
      });
    } else if (component === 'modal') {
      if (arrow === 'right') {
        this.setState((prevState) => ({
          mainImageIdx: prevState.mainImageIdx + 1,
          mainImage: prevState.productStyles[prevState.currentStyleIdx]
            .photos[prevState.mainImageIdx + 1].url,
        }));
      } else {
        this.setState((prevState) => ({
          mainImageIdx: prevState.mainImageIdx - 1,
          mainImage: prevState.productStyles[prevState.currentStyleIdx]
            .photos[prevState.mainImageIdx - 1].url,
        }));
      }
    } else {
      this.setState({
        mainImage: productStyles[idx].photos[0].url,
        currentStyleIdx: idx,
        currentStyle: productStyles[idx].name,
      });
    }
  }

  handleFullscreen = (e, escape) => {
    if (e.target.className === 'fullscreen-modal' || e.target.className === 'main-image' || escape) {
      this.setState((prevState) => ({
        fullscreen: !prevState.fullscreen,
      }));
    }
  }

  render() {
    const {
      productInfo,
      productStyles,
      mainImage,
      currentStyle,
      currentStyleIdx,
      fullscreen,
    } = this.state;

    return (
      <>
        <div className="overview-container">
          <div className="gallery-container">
            <Gallery
              productStyles={productStyles[currentStyleIdx]}
              changeMainImage={this.changeMainImage}
              handleFullscreen={this.handleFullscreen}
              mainImage={mainImage}
            />
          </div>
          <div className="product-container">
            <ProductContainer
              currentStyle={currentStyle}
              changeMainImage={this.changeMainImage}
              currentStyleIdx={currentStyleIdx}
              category={productInfo.category}
              title={productInfo.name}
              styles={productStyles}
            />
          </div>
        </div>
        {fullscreen ? (
          <FullscreenModal
            mainImage={mainImage}
            changeMainImage={this.changeMainImage}
            handleFullscreen={this.handleFullscreen}
          />
        ) : null}
      </>
    );
  }
}

export default Overview;

Overview.propTypes = {
  id: propTypes.string.isRequired,
};
