import React from 'react';
import propTypes from 'prop-types';

import './style-item.styles.scss';

const StyleItem = ({
  image,
  idx,
  changeMainImage,
  currentStyle,
}) => (
  <div
    className="style-item"
    role="presentation"
    onClick={() => changeMainImage(idx)}
    onKeyPress={() => changeMainImage(idx)}
  >
    <img src={image} alt="style" />
    {currentStyle ? (
      <img id="style-target" src="https://img.icons8.com/flat_round/64/000000/checkmark.png" alt="checkmark" />
    )
      : null}
  </div>
);

export default StyleItem;

StyleItem.propTypes = {
  image: propTypes.string.isRequired,
  idx: propTypes.number.isRequired,
  changeMainImage: propTypes.func.isRequired,
  currentStyle: propTypes.bool.isRequired,
};
