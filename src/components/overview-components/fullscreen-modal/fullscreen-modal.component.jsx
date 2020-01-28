import React from 'react';
import propTypes from 'prop-types';

import './fullscreen-modal.styles.scss';

class FullscreenModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { handleFullscreen, mainImage } = this.props;

    return (
      <div className="fullscreen-modal" onClick={(e) => handleFullscreen(e)} role="presentation">
        <div className="fullscreen-modal-content">
          <img src={mainImage} alt="main" />
        </div>
        <button type="button" id="modal-escape" onClick={(e) => handleFullscreen(e, true)}>
          Close
        </button>
      </div>
    );
  }
}

export default FullscreenModal;

FullscreenModal.propTypes = {
  changeMainImage: propTypes.func.isRequired,
  mainImage: propTypes.string.isRequired,
  handleFullscreen: propTypes.func.isRequired,
};
