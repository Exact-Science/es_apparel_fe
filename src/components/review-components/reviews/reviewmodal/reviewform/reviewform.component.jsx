import React from 'react';
import propTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import './reviewform-styles.scss';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overall: 0,
      recommended: '',
      summary: '',
      body: '',
      nickname: '',
      email: '',
    };
  }

  handleInputChange = (e) => {
    const { target } = e;
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  onSubmit = (data) => data;

  render() {
    const {
      overall, summary, body, nickname, email,
    } = this.state;
    const { handleSubmit } = this.props;
    return (
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="formInput" id="overallRating">
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
        <div className="formInput" id="recommendedRadios">
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
        <div className="formInput" id="summary">
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
        <div className="formInput" id="reviewbody">
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
        <div className="formInput">
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
            For privacy reasons, do not use your full name email address.
          </label>
        </div>
        <div className="formInput">
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
    );
  }
}

export default ReviewForm;

ReviewForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};
