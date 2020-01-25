import React from 'react';
import propTypes from 'prop-types';

import './style-item.styles.scss';

const StyleItem = ({ image, idx, changeMainImage }) => (
  <div
    className="style-item"
    role="presentation"
    onClick={() => changeMainImage(idx)}
    onKeyPress={() => changeMainImage(idx)}
  >
    <img src={image} alt="style" />
  </div>
);

export default StyleItem;

StyleItem.propTypes = {
  image: propTypes.string.isRequired,
  idx: propTypes.number.isRequired,
  changeMainImage: propTypes.func.isRequired,
};
