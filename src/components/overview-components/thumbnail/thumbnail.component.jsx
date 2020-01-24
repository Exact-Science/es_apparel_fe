import React from 'react';
import propTypes from 'prop-types';

import './thumbnail.styles.scss';

const Thumbnail = ({ thumbnail }) => (
  <div className="thumbnail">
    <img src={thumbnail} alt="placeholder" />
  </div>
);

export default Thumbnail;

Thumbnail.propTypes = {
  thumbnail: propTypes.string.isRequired,
};
