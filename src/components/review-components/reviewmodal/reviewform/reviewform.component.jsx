import React from 'react';
import propTypes from 'prop-types';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  handleSubmit = (e) => {
    console.log(e);
  }

  render() {
    return (
      <form className="formContainer" onSubmit={this.handleSubmit}>
        <label>
          Placeholder input
          <input type="text" />
        </label>
      </form>
    );
  }
}

export default ReviewForm;
