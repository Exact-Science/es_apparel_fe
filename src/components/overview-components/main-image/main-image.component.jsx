import React from 'react';
import propTypes from 'prop-types';

import './main-image.styles.scss';

const MainImage = ({ image }) => (
  <img className="main-image" src={image} alt="school" />
);

export default MainImage;


MainImage.propTypes = {
  image: propTypes.string.isRequired,
};
