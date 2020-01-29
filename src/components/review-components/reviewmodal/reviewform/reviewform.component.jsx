import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  handleSubmit = (e) => e;

  render() {
    return (
      <form className="formContainer" onSubmit={this.handleSubmit}>
        <label htmlFor="sampleInput">
          Placeholder input
          <input type="text" name="sampleInput" />
        </label>
      </form>
    );
  }
}

export default ReviewForm;
