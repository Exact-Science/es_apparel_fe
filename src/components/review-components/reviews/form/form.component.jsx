import React from 'react';
import propTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import FormSliders from './formsliders/formsliders.component';
import './form-styles.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      overall: 0,
      recommended: '',
      summary: '',
      body: '',
      nickname: '',
      email: '',
      photos: [],
      characteristics: {
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
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
    e.preventDefault();
    console.log(this.state);
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value, characteristics: { [name]: value } }, () => {
      console.log(this.state);
    });
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
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <div className="form-input" id="overallRating">
                  <label>
                    <h4>
                      Overall Rating*
                    </h4>
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
                      required
                      type="text"
                      name="summary"
                      value={summary}
                      maxLength="60"
                      placeholder="Best purchase ever!"
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <div className="form-input" id="reviewbody">
                  <label htmlFor="body">
                    <h4>
                      Why did you like the product or not?*
                    </h4>
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
                </div>
                <FormSliders factors={factors} handleInputChange={this.handleInputChange} />
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

export default Form;

Form.propTypes = {
  id: propTypes.string.isRequired,
  toggleModal: propTypes.func.isRequired,
  show: propTypes.bool.isRequired,
};
