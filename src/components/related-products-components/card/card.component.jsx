/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable radix */
import React from 'react';
import propTypes from 'prop-types';
import './card.styles.scss';
import Rating from '@material-ui/lab/Rating';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starRating: 0,
    };
  }

  componentDidMount() {
    const { relatedProduct } = this.props;
    fetch(`http://3.134.102.30/reviews/${relatedProduct.id}/list?count=1000`)
      .then((results) => results.json())
      .then((reviews) => this.setState({ reviews }))
      .then(() => this.state.reviews.results.reduce(
        (accumulator, review) => accumulator + review.rating, 0,
      ))
      .then((rating) => {
        const roundedRating = ((
          Math.round((rating / this.state.reviews.results.length) * 10) / 10).toFixed(2));
        const starRating = ((
          Math.round((rating / this.state.reviews.results.length) * 4) / 4).toFixed(2));

        this.setState({ rating: roundedRating, starRating });
      });
  }

  render() {
    const { relatedProduct, productStyle } = this.props;
    const { starRating } = this.state;
    const rpId = (productStyle ? productStyle[0].product_id : null);
    return (
      <div className="rp-card">
        <div className="image" role="navigation" onClick={() => { window.location.href = rpId; }}><img
          src={productStyle && productStyle[0].results[0].photos[0].url
            ? productStyle[0].results[0].photos[0].url
            : 'https://static.thenounproject.com/png/2932881-200.png'}
          alt="Related Product"
        />
        </div>
        <div className="rp-card-details">
          <div>{relatedProduct.category}</div>
          <div className="product-name">{relatedProduct.name}</div>
          {productStyle && productStyle[0].results[0].sale_price
          && parseInt(productStyle[0].results[0].sale_price) > 0
            ? (
              <div className="rp-pricing-container">
                <span className="rp-pricing-sale">${productStyle[0].results[0].sale_price} </span>
                <span className="rp-pricing-default-strikethrough">${relatedProduct.default_price}</span>
              </div>
            )
            : null}
          {productStyle && !(parseInt(productStyle[0].results[0].sale_price) > 0)
            ? (
              <div className="rp-pricing-container">
                <span className="rp-pricing-default">${relatedProduct.default_price}</span>
              </div>
            )
            : null}
          <div>
            <Rating
              className="rating"
              name={`read-only-${relatedProduct.id}`}
              value={parseInt(starRating)}
              size="small"
              // precision={0.50}
              readOnly
            />
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  id: propTypes.string.isRequired,
  relatedProduct: propTypes.shape({
    category: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    default_price: propTypes.string.isRequired,
  }).isRequired,
  productStyle: propTypes.arrayOf(propTypes.shape({})),
};

export default Card;
