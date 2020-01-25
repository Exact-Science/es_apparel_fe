import React from 'react';
import propTypes from 'prop-types';

import './style-info.styles.scss';

const StyleInfo = ({ currentStyle }) => (
  <div className="style-info">
    STYLES &gt; &nbsp;
    {currentStyle}
  </div>
);

export default StyleInfo;

StyleInfo.propTypes = {
  currentStyle: propTypes.string.isRequired,
};
