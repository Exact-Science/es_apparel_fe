import React from 'react';
import propTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import {
  makeStyles, withStyles, FormControl, FormHelperText, Switch, TextField, Input, InputLabel, Button,
  Grid,
} from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import CancelIcon from '@material-ui/icons/Cancel';
import FormSliders from './formsliders/formsliders.component';
import Photos from './photos/photos.component';
import './form-styles.scss';

const StyledRating = withStyles({
  iconFilled: {
    color: '#3f51b5',
  },
  iconHover: {
    color: '#3f51b5',
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
      allowPhotos: false,
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

  updateCharacteristics = (e) => {
    const { value } = e.target;
    console.log(value)
  }

  togglePhotos = () => {
    const { allowPhotos } = this.state;
    this.setState({ allowPhotos: !allowPhotos });
  }

  render() {
    const { overall, summary, body, nickname, email, productName, recommended, allowPhotos } = this.state;
    const { show, toggleModal, factors } = this.props;

    if (show) {
      return (
        <div className="form-modal">
          <div className="form-modal-main">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <header className="form-header">
                  <h1>{`What do you think about the ${productName}?`}</h1>
                  {/* <Button
                    type="button"
                    variant="outlined"
                    color="primary"
                    onClick={toggleModal}
                  >
                    Cancel
                  </Button> */}
                </header>
              </Grid>
              <div className="form-container">
                <form onSubmit={this.handleSubmit} name="addReview">
                  <div className="form-input" id="overallRating">
                    <StyledRating
                      size="large"
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
                      onChange={this.handleChange("recommended")}
                      value={recommended}
                      color="primary"
                      inputProps={{ "aria-label": "primary checkbox" }}
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
                    error={summary.length > 60 ? true : false}
                    helperText={
                      "Please keep your review title less than 60 characters"
                    }
                    rows={2}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant="outlined"
                  />
                  <TextField
                    required
                    id="body-input"
                    value={body}
                    name="body"
                    label="Review"
                    placeholder="What makes a great review? The more detail, explanation of use, and the condition you used this product in help everyone"
                    style={{ margin: 8 }}
                    onChange={this.handleInputChange}
                    error={body.length >= 1000 ? true : false}
                    helperText="Please keep your review between 50 and 1000 characters"
                    fullWidth
                    multiline
                    rows={5}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant="outlined"
                  />
                  <TextField
                    required
                    name="email"
                    onChange={this.handleInputChange}
                    label="Email"
                    type="email"
                    value={email}
                    error={false}
                    placeholder="johndoe@email.com"
                    helperText="For authentication reasons, you won't be emailed"
                    style={{ margin: 8 }}
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    required
                    name="nickname"
                    onChange={this.handleInputChange}
                    label="Nickname"
                    value={nickname}
                    placeholder="jackieBoi!"
                    helperText="For privacy reasons, please don't use your email address"
                    style={{ margin: 8 }}
                    error={false}
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant="outlined"
                    size="small"
                  />
                  {/* <FormSliders
                    factors={factors}
                    updateCharacteristics={this.updateCharacteristics}
                  /> */}
                  <div>
                    <Button
                      type="submit"
                      variant="outlined"
                      style={{ margin: 8 }}
                      color="primary"
                      onClick={this.handleSubmit}
                    >
                      Submit Review
                    </Button>
                    {!allowPhotos ? (
                      <Button
                        type="button"
                        variant="outlined"
                        color="primary"
                        style={{ margin: 8 }}
                        onClick={this.togglePhotos}
                      >
                        <PhotoCameraIcon size="small" />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        variant="outlined"
                        style={{ margin: 8 }}
                        color="primary"
                        onClick={this.togglePhotos}
                      >
                        <CancelIcon />
                      </Button>
                    )}

                    <Photos
                      allowPhotos={allowPhotos}
                      togglePhotos={this.togglePhotos}
                      handleInputChange={this.handleInputChange}
                    />
                  </div>
                </form>
              </div>
            </Grid>
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
