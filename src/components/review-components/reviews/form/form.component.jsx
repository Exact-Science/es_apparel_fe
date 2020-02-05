import React from 'react';
import propTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import FormSliders from './formsliders/formsliders.component';
import './form-styles.scss';

class Form extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {
      productName: '',
      overall: 0,
      recommended: '',
      summary: '',
      body: '',
      nickname: '',
      email: '',
      photos: [],
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
    console.log(this.state);
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      overall, summary, body, nickname, email, productName,
    } = this.state;
    const { show, toggleModal, factors } = this.props;
    if (show) {
      return (
        <div className="form-modal">
          <div className="form-modal-main">
            <h2>Write your review here</h2>
            <h4>{`About the ${productName}:`}</h4>
            <button type="button" onClick={toggleModal}>
              Cancel
            </button>
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <div className="form-input" id="overallRating">
                  <label>
                    <h4>
                      Overall Rating*
                    </h4>
                    <Rating
                      name="overall"
                      value={parseInt(overall, 0)}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <div className="form-input" id="recommendedRadios">
                  <label htmlFor="recommended">
                    <h4>
                      Do you recommend this product?*
                    </h4>
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
                    <h4>
                      Summarize your experience with this product*
                    </h4>
                    <input
                      type="text"
                      name="summary"
                      value={summary}
                      placeholder="Best purchase ever!"
                      onChange={this.handleInputChange}
                      maxLength="60"
                      required
                    />
                  </label>
                </div>
                {/* <div className="form-input" id="reviewbody">
                  <label htmlFor="body">
                    <h4>
                      Why did you like the product or not?*
                    </h4>
                    <textarea
                      required
                      name="body"
                      value={body}
                      minlength="50"
                      maxlength="1000"
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div> */}
                {/* <div className="form-input">
                  <label htmlFor="nickname">
                    <h4>
                      Nickname:
                    </h4>
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
                    <h4>
                      Email:
                    </h4>
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
                </div> */}
                <FormSliders factors={factors} handleInputChange={this.handleInputChange} />
                <div className="form-input">
                  <label htmlFor="photos">
                    <h4>Upload your review photos here</h4>
                    <input type="url" name="photos" pattern="https://.*" />
                    <input type="url" name="photos" pattern="https://.*" />
                    <input type="url" name="photos" pattern="https://.*" />
                  </label>
                </div>
                <button type="button" onClick={toggleModal}>
                  Cancel
                </button>
                <button type="submit" onClick={this.handleSubmit}>
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Form;

Form.propTypes = {
  id: propTypes.string.isRequired,
  toggleModal: propTypes.func.isRequired,
  show: propTypes.bool.isRequired,
  factors: propTypes.shape({}).isRequired,
};
