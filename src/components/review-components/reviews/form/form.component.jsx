/* eslint-disable consistent-return */
import React from 'react';
import propTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import { withStyles, Switch, TextField, Button, Grid } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import CancelIcon from '@material-ui/icons/Cancel';
// import FormSliders from './formsliders/formsliders.component';
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
      recommend: false,
      rating: 0,
      summary: '',
      body: '',
      name: '',
      email: '',
      characteristics: {},
      photos: ['https://source.unsplash.com/random/600x400', 'https://source.unsplash.com/random/600x400'],
      allowPhotos: false,
    };
  }

  componentDidMount() {
    this.getProductInfo();
  }

  getProductInfo = async () => {
    const { id } = this.props;
    const data = await fetch(`${process.env.REACT_APP_API_ROUTE}/products/${id}`);
    const results = await data.json();
    this.setState({ productName: results.name });
  };

  handleSubmit = async (e) => {
    const { id, toggleModal, getReviews, getRatings } = this.props;
    const {
      recommend, rating, summary, body, name, email, characteristics, photos,
    } = this.state;
    const postData = {
      recommend,
      rating,
      summary,
      body,
      name,
      email,
      characteristics,
      photos,
    };
    if (rating && summary && body && name && email.includes('@')) {
      try {
        e.preventDefault();
        e.persist();
        const response = await fetch(`http://3.134.102.30/reviews/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });
        if (response) {
          await getReviews();
          await getRatings();
          toggleModal();
          return response;
        }
      } catch (err) {
        return err;
      }
    }
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  togglePhotos = () => {
    const { allowPhotos } = this.state;
    this.setState({ allowPhotos: !allowPhotos });
  }

  render() {
    const {
      rating, summary, body, productName, recommend, allowPhotos,
    } = this.state;
    const { show, toggleModal } = this.props;

    if (show) {
      return (
        <div className="form-modal">
          <div className="form-modal-main">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <header className="form-header">
                  <Button
                    className="cancel-btn"
                    type="button"
                    onClick={toggleModal}
                  >
                    <CancelIcon />
                  </Button>
                  <h1>{`What do you think about the ${productName}?`}</h1>
                </header>
              </Grid>
              <div className="form-container">
                <form onSubmit={this.handleSubmit} name="addReview">
                  <div className="form-input" id="overallRating">
                    <StyledRating
                      size="large"
                      name="rating"
                      value={parseInt(rating, 0)}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-input">
                    <h4>Do You recommend this product?</h4>
                    <span>No</span>
                    <Switch
                      checked={recommend}
                      onChange={this.handleChange('recommend')}
                      value={recommend}
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
                    style={{ margin: 10 }}
                    onChange={this.handleInputChange}
                    fullWidth
                    multiline
                    error={summary.length > 60}
                    helperText="Please keep your review summary to less than 60 characters"
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
                    placeholder="What makes a great review? The more detail, explanation of use, and the condition you used this product in help everyone"
                    style={{ margin: 10 }}
                    onChange={this.handleInputChange}
                    error={body.length > 1000}
                    helperText="Please keep your review between 50 and 1000 characters"
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
                    name="email"
                    onChange={this.handleInputChange}
                    label="Email"
                    type="email"
                    error={false}
                    placeholder="johndoe@email.com"
                    helperText="For authentication reasons, you won't be emailed"
                    style={{ margin: 10 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    required
                    name="name"
                    onChange={this.handleInputChange}
                    label="name"
                    placeholder="jackieBoi!"
                    helperText="For privacy reasons, please don't use your email address"
                    style={{ margin: 10 }}
                    error={false}
                    InputLabelProps={{
                      shrink: true,
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
                      size="small"
                      variant="outlined"
                      style={{ margin: 8 }}
                      onClick={this.handleSubmit}
                    >
                      Submit Review
                    </Button>
                    {!allowPhotos ? (
                      <Button
                        type="button"
                        size="small"
                        variant="outlined"
                        style={{ margin: 8 }}
                        onClick={this.togglePhotos}
                      >
                        <PhotoCameraIcon size="small" />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        size="small"
                        variant="outlined"
                        style={{ margin: 8 }}
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
  getReviews: propTypes.func.isRequired,
  toggleModal: propTypes.func.isRequired,
  show: propTypes.bool.isRequired,
  factors: propTypes.shape({}).isRequired,
};
