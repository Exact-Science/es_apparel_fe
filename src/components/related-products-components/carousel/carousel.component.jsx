import React from 'react';
import propTypes from 'prop-types';
import Card from '../card/card.component';
import './carousel.styles.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: [],
      filteredProductIds: [],
      filterCount: 4,
    };
  }

  componentDidMount() {
    const { id } = this.props;
    const { filterCount } = this.state;
    fetch(`http://3.134.102.30/products/${id}/related`)
      .then((results) => results.json())
      .then((ids) => { return [...new Set(ids)]; })
      .then((relatedProductIds) => this.setState({ relatedProductIds, filteredProductIds: relatedProductIds.slice(0, filterCount) }));
  }

  render() {
    const { filteredProductIds } = this.state;
    return (
      <div className="rp-carousel-container">
        {filteredProductIds.map((
          relatedProduct,
        ) => <Card relatedProduct={relatedProduct} key={relatedProduct} />)}
      </div>
    );
  }
}

Carousel.propTypes = {
  id: propTypes.string.isRequired,
};

export default Carousel;
