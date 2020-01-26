import React from 'react';
import propTypes from 'prop-types';

const Thumbnails = ({ images }) => {
  if (images.length) {
    images.map((img) => {
      return (
        <div className="thumbnail">
          <img src={img.url} key={img.id} alt="product thumbnail" />
        </div>
      );
    });
  }
  return null;
};

export default Thumbnails;

Thumbnails.propTypes = {
  images: propTypes.arrayOf(propTypes.object).isRequired,
};
