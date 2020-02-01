import React from 'react';
import propTypes from 'prop-types';
import Thumbnail from './thumbnail.component';
import './thumbnails-styles.scss';

const Thumbnails = ({ images }) => (
  <div className="thumbnails">
    {images.map((img) => (
      <Thumbnail
        image={img.url}
        key={img.id}
        alt="User-provided product review thumbnail"
      />
    ))}
  </div>
);

export default Thumbnails;

Thumbnails.propTypes = {
  images: propTypes.arrayOf(propTypes.object).isRequired,
};
