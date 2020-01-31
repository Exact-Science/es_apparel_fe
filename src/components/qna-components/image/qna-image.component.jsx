import React from 'react';
import './qna-image.styles.scss';
import propTypes from 'prop-types';
import FullImageModal from '../full-image-modal/qna-full-image-modal.component';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullImage: false,
    };
  }

  componentDidMount() {

  }

  showFullImage = (e) => {
    e.preventDefault();
    const { fullImage } = this.state;
    this.setState({ fullImage: !fullImage });
  }

  render() {
    const { imageUrl } = this.props;
    const { fullImage } = this.state;
    return (
      <div className="qna-image" onClick={this.showFullImage} onKeyDown={this.showFullImage} role="button" tabIndex="0">
        { fullImage ? <FullImageModal imageUrl={imageUrl} /> : null }
        <img className="answer-image" src={imageUrl} alt="Suporting img for answer" />
      </div>
    );
  }
}

Image.propTypes = {
  imageUrl: propTypes.string.isRequired,
};

export default Image;
