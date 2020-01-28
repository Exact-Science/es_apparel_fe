import React from 'react';
import propTypes from 'prop-types';
import ReviewForm from './reviewform/reviewform.component';
import './reviewmodal-styles.scss';

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
        <div className="reviewmodal">
          <div className="reviewmodal-main">
            <h3>Write your review here</h3>
            <h4>{`About the ${productName}`}</h4>
            <ReviewForm />
            <button type="submit" onClick={toggleModal}>Close</button>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default ReviewModal;

ReviewModal.propTypes = {
  id: propTypes.string.isRequired,
  toggleModal: propTypes.func.isRequired,
  show: propTypes.bool.isRequired,
};
