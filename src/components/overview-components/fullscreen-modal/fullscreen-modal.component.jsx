import React from 'react';
import propTypes from 'prop-types';

import Magnifier from 'react-magnifier';
import ModalButton from '../modal-button/modal-button.component';

import './fullscreen-modal.styles.scss';


const FullscreenModal = ({ handleFullscreen, mainImage, changeMainImage }) => (
  <div className="fullscreen-modal" onClick={(e) => handleFullscreen(e)} role="presentation">
    <div className="fullscreen-modal-content">
      <Magnifier src={mainImage} />
    </div>
    <div className="modal-buttons-container">
      <ModalButton changeMainImage={changeMainImage} />
    </div>
    <button type="button" id="modal-escape" onClick={(e) => handleFullscreen(e, true)}>
        Close
    </button>
  </div>
);


export default FullscreenModal;

FullscreenModal.propTypes = {
  changeMainImage: propTypes.func.isRequired,
  mainImage: propTypes.string.isRequired,
  handleFullscreen: propTypes.func.isRequired,
};
