import React from 'react';
import propTypes from 'prop-types';
import './qna-full-image-modal.styles.scss';

class FullImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { imageUrl } = this.props;
    return (
      <div className="qna-full-image-modal-container">
        <div className="qna-size-reducer">
          <div className="qna-full-image-modal-content">
            <span className="closeModal">x</span>
            <img className="fullImage" src={imageUrl} alt="full size img" />
          </div>
        </div>
      </div>
    );
  }
}

FullImageModal.propTypes = {
  imageUrl: propTypes.string.isRequired,
};

export default FullImageModal;
