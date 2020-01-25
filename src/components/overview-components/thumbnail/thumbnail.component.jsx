import React from 'react';
import propTypes from 'prop-types';

import './thumbnail.styles.scss';

const Thumbnail = ({
  thumbnail,
  changeMainImage,
  idx,
  startIdx,
  endIdx,
}) => (
  <div
    className="thumbnail"
    role="presentation"
    onClick={() => changeMainImage(idx, 'thumbnail')}
    style={{ display: (idx <= endIdx && idx >= startIdx) ? '' : 'none' }}
  >
    <img src={thumbnail} alt="placeholder" />
  </div>
);

export default Thumbnail;

Thumbnail.propTypes = {
  thumbnail: propTypes.string.isRequired,
  changeMainImage: propTypes.func.isRequired,
  idx: propTypes.number.isRequired,
  startIdx: propTypes.number.isRequired,
  endIdx: propTypes.number.isRequired,
};
