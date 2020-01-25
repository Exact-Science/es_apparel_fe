import React from 'react';
import propTypes from 'prop-types';

import './thumbnail.styles.scss';

const Thumbnail = ({ thumbnail, changeMainImage, idx }) => (
  <div
    className="thumbnail"
    role="presentation"
    onClick={() => changeMainImage(idx, 'thumbnail')}
    onKeyPress={() => changeMainImage()}
  >
    <img src={thumbnail} alt="placeholder" />
  </div>
);

export default Thumbnail;

Thumbnail.propTypes = {
  thumbnail: propTypes.string.isRequired,
  changeMainImage: propTypes.func.isRequired,
  idx: propTypes.number.isRequired,
};
