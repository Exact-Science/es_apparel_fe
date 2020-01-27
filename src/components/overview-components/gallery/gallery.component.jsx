import React from 'react';
import propTypes from 'prop-types';

import MainImage from '../main-image/main-image.component';
import Thumbnail from '../thumbnail/thumbnail.component';
import ThumbnailScroll from '../thumbnail-scroll/thumbnail-scroll.component';

import './gallery.styles.scss';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startIdx: 0,
      endIdx: 3,
    };
  }

  updateRange = (arrow) => {
    if (arrow === 'up') {
      this.setState((prevState) => ({
        startIdx: prevState.startIdx - 1,
        endIdx: prevState.endIdx - 1,
      }));
    } else {
      this.setState((prevState) => ({
        startIdx: prevState.startIdx + 1,
        endIdx: prevState.endIdx + 1,
      }));
    }
  }

  render() {
    const {
      mainImage,
      productStyles,
      changeMainImage,
      handleFullscreen,
    } = this.props;

    const { startIdx, endIdx } = this.state;

    return (
      <>
        <div className="main-image" onClick={handleFullscreen} role="presentation">
          <MainImage
            image={mainImage}
          />
        </div>
        <div className="thumbnails-container">
          {
            startIdx > 0 ? (
              <ThumbnailScroll
                arrow="up"
                updateRange={this.updateRange}
                endIdx={endIdx}
                maxIdx={productStyles.photos.length}
              />
            ) : null
          }
          {
            productStyles.photos.map((img, idx) => (
              <Thumbnail
                key={img.thumbnail_url}
                idx={idx}
                target={img.url === mainImage}
                startIdx={startIdx}
                endIdx={endIdx}
                changeMainImage={changeMainImage}
                thumbnail={img.thumbnail_url}
              />
            ))
          }
          {
            endIdx < productStyles.photos.length - 1 ? (
              <ThumbnailScroll
                arrow="down"
                updateRange={this.updateRange}
                endIdx={endIdx}
                maxIdx={productStyles.photos.length}
              />
            ) : null
          }
        </div>
      </>
    );
  }
}

export default Gallery;

Gallery.propTypes = {
  mainImage: propTypes.string.isRequired,
  productStyles: propTypes.shape({
    photos: propTypes.array,
  }).isRequired,
  changeMainImage: propTypes.func.isRequired,
  handleFullscreen: propTypes.func.isRequired,
};
