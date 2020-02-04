import React from 'react';
import propTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import './reviewmodal-styles.scss';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      form: {
        overall: 0,
        recommended: '',
        summary: '',
        body: '',
        nickname: '',
        email: '',
        characteristics: {
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
        },
      },
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
  };

  handleSubmit = (e) => {
    const { form } = this.state;
    e.preventDefault();
    console.log(form);
  };

  handleInputChange = (e) => {
    const { target } = e;
    const { value, name } = target;
    const { form } = this.state;
    this.setState({ form: { [name]: value } }, () => console.log(form));
  };

  render() {
    const { overall, summary, body, nickname, email } = this.state.form;
    const { productName } = this.state;
    const { show, toggleModal } = this.props;
    if (show) {
      return (
        <div className="reviewmodal">
          <div className="reviewmodal-main">
            <h2>Write your review here</h2>
            <h4>{`About the ${productName}:`}</h4>
            <div className="form-main">
              <form className="form-container" onSubmit={this.handleSubmit}>
                <div className="form-input" id="overallRating">
                  <label>
                    Overall Rating*
                    <Rating
                      required
                      name="overall"
                      value={parseInt(overall, 0)}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <div className="form-input" id="recommendedRadios">
                  <label htmlFor="recommended">
                    Do you recommend this product?*
                    <input
                      required
                      type="radio"
                      name="recommended"
                      value={true}
                      onChange={this.handleInputChange}
                    />
                    Yes
                    <input
                      required
                      type="radio"
                      name="recommended"
                      value={false}
                      onChange={this.handleInputChange}
                    />
                    No
                  </label>
                </div>
                <div className="form-input" id="summary">
                  <label htmlFor="summary">
                    Summarize your experience with this product*
                    <input
                      required
                      type="text"
                      name="summary"
                      value={summary}
                      maxLength="60"
                      placeholder="Example: Best purchase ever!"
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <div className="form-input" id="reviewbody">
                  <label htmlFor="body">
                    Why did you like the product or not?
                    <textarea
                      required
                      name="body"
                      value={body}
                      minLength="50"
                      maxLength="1000"
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <div className="form-input">
                  <label htmlFor="nickname">
                    Nickname:
                    <input
                      required
                      name="nickname"
                      value={nickname}
                      maxLength="60"
                      placeholder="Example: jackson11!"
                      onChange={this.handleInputChange}
                    />
                    For privacy reasons, do not use your full name email
                    address.
                  </label>
                </div>
                <div className="form-input">
                  <label htmlFor="email">
                    Email:
                    <input
                      required
                      name="email"
                      type="email"
                      value={email}
                      maxLength="60"
                      placeholder="Example: jackson11@email.com"
                      onChange={this.handleInputChange}
                    />
                    For authentication reasons, you will not be emailed.
                  </label>
                </div>
              </form>
            </div>
            <button type="submit" onClick={toggleModal}>
              Close
            </button>
            <button type="submit" onClick={this.handleSubmit}>
              Submit Review
            </button>
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
