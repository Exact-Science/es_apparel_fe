import React from 'react';
import propTypes from 'prop-types';

import './modal-button.styles.scss';

const ModalButton = ({ changeMainImage }) => (
  <>
    <div
      className="overview-arrow-left"
      onClick={() => changeMainImage(null, 'modal', 'left')}
      role="presentation"
    >
      <div className="overview-arrow-left-top" />
      <div className="overview-arrow-left-bottom" />
    </div>
    <div
      className="overview-arrow-right"
      onClick={() => changeMainImage(null, 'modal', 'right')}
      role="presentation"
    >
      <div className="overview-arrow-right-top" />
      <div className="overview-arrow-right-bottom" />
    </div>
  </>
);

export default ModalButton;

ModalButton.propTypes = {
  changeMainImage: propTypes.func.isRequired,
};
