import React from 'react';
import propTypes from 'prop-types';
import Thumbnail from './thumbnail.component';
import './thumbnails-styles.scss';

const Thumbnails = ({ images, enlargeImage, showFull }) => (
  <div className={showFull ? 'thumbs-modal' : null}>
    <div className={showFull ? 'thumbs-modal-main' : 'thumbnails'}>
      {images.map((img) => (
        <Thumbnail
          image={img.url}
          key={img.id}
          alt="User-provided product review thumbnail"
          enlargeImage={enlargeImage}
          showFull={showFull}
        />
      ))}
    </div>
  </div>
);

export default Thumbnails;

Thumbnails.propTypes = {
  images: propTypes.arrayOf(propTypes.object).isRequired,
  enlargeImage: propTypes.func.isRequired,
  showFull: propTypes.bool.isRequired,
};
