import React from 'react';
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
    };
  }


  handleSubmit = (e) => e;

  handleInputChange = (e) => {
    const { target } = e;
    const { value, name } = target;
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });
  }

  render() {
    const { overall, summary, body } = this.state;
    return (
      <form className="formContainer" onSubmit={this.handleSubmit}>
        <label>
          Overall Rating*
          <Rating name="overall" value={parseInt(overall, 0)} onChange={this.handleInputChange} />
        </label>
        <label htmlFor="recommend">
          Do you recommend this product?*
          <input type="radio" name="recommended" value={true} onChange={this.handleInputChange} />
          Yes
          <input type="radio" name="recommended" value={false} onChange={this.handleInputChange} />
          No
        </label>
        <label htmlFor="summary">
          Summarize your experience with this product*
          <input type="text" name="summary" value={summary} onChange={this.handleInputChange} />
        </label>
        <label htmlFor="body">
          <input type="textarea" name="body" value={body} onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default ReviewForm;
