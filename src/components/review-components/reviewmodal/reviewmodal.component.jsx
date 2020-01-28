import React from 'react';
import propTypes from 'prop-types';

class ReviewModal extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {
      productName: '',
    };
  }

  componentDidMount() {
    this.getProductInfo();
  }

  getProductInfo = async () => {
    const { id } = this.props;
    const data = await fetch(`http://3.134.102.30/products/${id}`);
    const results = await data.json();
    this.setState({ productName: results.name });
  }


  render() {
    const { productName } = this.state;
    const { show, toggleModal } = this.props;
    if (show) {
      return (
        <div className="reviewModal">
          <h1>Write your review here</h1>
          <h3>{`About the ${productName}`}</h3>
          <button type="submit" onClick={toggleModal}>Cancel</button>
        </div>
      );
    }
    return null;
  }
}

export default ReviewModal;

ReviewModal.propTypes = {
  id: propTypes.string.isRequired,
};
