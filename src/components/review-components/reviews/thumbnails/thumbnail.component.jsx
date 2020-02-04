import React from 'react';
import propTypes from 'prop-types';

const Thumbnail = ({ image, alt, enlargeImage, showFull }) => (
    <img
      className={showFull ? "thumbs-modal-main" : "review-thumbs"}
      src={image}
      alt={alt}
      onClick={enlargeImage}
    />
);

export default Thumbnail;

Thumbnail.propTypes = {
  image: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  enlargeImage: propTypes.func.isRequired,
  showFull: propTypes.bool.isRequired,
};
