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
      <div className="fullscreen-modal">
        <div className="fullscreen-modal-content" onClick={handleFullscreen} role="presentation">
          <img src={mainImage} alt="main" />
        </div>
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
