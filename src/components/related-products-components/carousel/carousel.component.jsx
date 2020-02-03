import React from 'react';
import propTypes from 'prop-types';
import './carousel.styles.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { id, relatedProductIds } = this.props;
    return (
      <div className="rp-carousel-container">
        Carousel
        {relatedProductIds}
      </div>
    );
  }
}

Carousel.propTypes = {
  id: propTypes.string.isRequired,
};

export default Carousel;
