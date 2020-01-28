import React from 'react';
import propTypes from 'prop-types';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "",
      recommended: "",
      charteristics: {
        size: "",
        width: "",
        comfort: "",
        quality: "",
        length: "",
        fit: ""
      },
      summary: "",
      body: "",
      nickname: "",
      email: "",
    };
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = e.target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {

  }

  render() {
    const { summary, body, nickname, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Summary*
          <input
            type="text"
            name="summary"
            value={summary}
            placeholder="Best purchase ever!"
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Body*
          <input
            type="text"
            name="body"
            value={body}
            placeholder="Why did you like the product or not?"
          />
        </label>
      </form>
    );
  }
}

export default ReviewForm;
