import React from 'react';
import propTypes from 'prop-types';

import MainImage from '../main-image/main-image.component';

import './gallery.styles.scss';

class Gallery extends React.Component {
  constructor(props, { productStyles }) {
    super(props, { productStyles });

    this.state = {

    };
  }

  render() {
    const { mainImage } = this.props;

    return (
      <div className="main-image">
        <MainImage
          image={mainImage}
        />
      </div>
    );
  }
}

export default Gallery;

Gallery.propTypes = {
  mainImage: propTypes.string.isRequired,
};
