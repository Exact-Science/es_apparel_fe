import React from 'react';
import propTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, withStyles, FormControl, FormHelperText, Switch, TextField, Input, InputLabel, Button } from '@material-ui/core';
import FormSliders from './formsliders/formsliders.component';
import './form-styles.scss';

const StyledRating = withStyles({
  iconFilled: {
    color: '#222',
  },
  iconHover: {
    color: '#222',
    opacity: '.5',
  },
})(Rating);

class Form extends React.Component {
  constructor(props, { id }) {
    super(props, { id });
    this.state = {
      productName: '',
      overall: 0,
      recommended: false,
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

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });
  };

  render() {
    const { overall, summary, body, nickname, email, productName, recommended } = this.state;
    const { show, toggleModal, factors } = this.props;

    if (show) {
      return (
        <div className="form-modal" onClick={toggleModal}>
          <div className="form-modal-main">
            <header className="form-header">
              <h1>
                {`What do you think about the product?`}
              </h1>
              <button type="button" onClick={toggleModal}>Cancel</button>
            </header>
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <div className="form-input" id="overallRating">
                  <StyledRating
                    name="overall"
                    value={parseInt(overall, 0)}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-input">
                  <h4>Do You recommend this product?</h4>
                  <span>No</span>
                  <Switch
                    required
                    checked={recommended}
                    onChange={this.handleChange('recommended')}
                    value={recommended}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  <span>Yes</span>
                </div>
                <TextField
                  required
                  id="summary-input"
                  value={summary}
                  name="summary"
                  label="Title"
                  placeholder="What is the title of your review?"
                  style={{ margin: 8 }}
                  onChange={this.handleInputChange}
                  fullWidth
                  multiline
                  rows={2}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <TextField
                  required
                  id="body-input"
                  value={body}
                  name="body"
                  label="Review"
                  placeholder="The more detail, explanation of use, and the condition you used this
                    product in help everyone"
                  style={{ margin: 8 }}
                  onChange={this.handleInputChange}
                  fullWidth
                  multiline
                  rows={5}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <TextField
                  required
                  onChange={this.handleInputChange}
                  label="Email"
                  type="email"
                  value={email}
                  placeholder="johndoe@email.com"
                  style={{ margin: 8 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  required
                  onChange={this.handleInputChange}
                  label="Nickname"
                  value={nickname}
                  placeholder="jackieBoi!"
                  helperText="For privacy reasons, please don't use your email address"
                  style={{ margin: 8 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  size="small"
                />
                <FormSliders
                  factors={factors}
                  handleInputChange={this.handleInputChange}
                />
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
