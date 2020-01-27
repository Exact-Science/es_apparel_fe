import React from 'react';
import propTypes from 'prop-types';

const Thumbnails = ({ images }) => {
  if (images.length) {
    images.map((img) => (
      <div>
        <img src={img.url} key={img.id} alt="user-provided product review thumbnail" />
      </div>
    ));
  }
  return null;
};

export default Thumbnails;

Thumbnails.propTypes = {
  images: propTypes.arrayOf(propTypes.object).isRequired,
};
