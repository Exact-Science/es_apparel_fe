import React from 'react';
import propTypes from 'prop-types';

import MainImage from '../main-image/main-image.component';
import Thumbnail from '../thumbnail/thumbnail.component';

import './gallery.styles.scss';

class Gallery extends React.Component {
  constructor(props, { productStyles }) {
    super(props, { productStyles });

    this.state = {

    };
  }

  render() {
    const { mainImage, productStyles } = this.props;

    return (
      <>
        <div className="thumbnails-container">
          {
            productStyles.photos.map((img) => (
              <Thumbnail
                key={img.thumbnail_url}
                thumbnail={img.thumbnail_url}
              />
            ))
          }
        </div>
        <div className="main-image">
          <MainImage
            image={mainImage}
          />
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
};
