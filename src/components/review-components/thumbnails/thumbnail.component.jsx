import React from 'react';
import propTypes from 'prop-types';

const Thumbnail = ({ image, alt }) => (
  <img src={image} alt={alt} />
);

export default Thumbnail;

Thumbnail.propTypes = {
  image: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};
