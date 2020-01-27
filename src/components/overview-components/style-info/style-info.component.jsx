import React from 'react';
import propTypes from 'prop-types';

import './style-info.styles.scss';

const StyleInfo = ({ currentStyle, style }) => (
  <div className="style-info">
    <p style={style}>
      STYLE &gt; &nbsp;
    </p>
    <p>
      {currentStyle}
    </p>
  </div>
);

export default StyleInfo;

StyleInfo.propTypes = {
  currentStyle: propTypes.string.isRequired,
  style: propTypes.shape({}).isRequired,
};
