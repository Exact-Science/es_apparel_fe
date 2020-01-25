import React from 'react';
import propTypes from 'prop-types';

import './thumbnail-scroll.styles.scss';

const ThumbnailScroll = ({ arrow, updateRange }) => (
  <div
    className={arrow === 'up' ? 'arrow up' : 'arrow down'}
    onClick={() => updateRange(arrow)}
    role="presentation"
  >
    <img
      src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"
      alt="down arrow"
    />
  </div>
);

export default ThumbnailScroll;

ThumbnailScroll.propTypes = {
  arrow: propTypes.string.isRequired,
  updateRange: propTypes.func.isRequired,
};
