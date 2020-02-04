import React from 'react';
import propTypes from 'prop-types';
import './card.styles.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { relatedProduct } = this.props;
    return (
      <div className="rp-card-container">
        Card
        {relatedProduct.category}
      </div>
    );
  }
}

Card.propTypes = {
  relatedProduct: propTypes.shape({}).isRequired,
};

export default Card;
