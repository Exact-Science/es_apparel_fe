import React from 'react';
import propTypes from 'prop-types';

import './style-item.styles.scss';

const StyleItem = ({ image }) => (
  <div className="style-item">
    <img src={image} alt="style" />
  </div>
);

export default StyleItem;

StyleItem.propTypes = {
  image: propTypes.string.isRequired,
};
