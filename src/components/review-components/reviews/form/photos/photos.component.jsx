import React from 'react';
import propTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const Photos = ({ allowPhotos, addPhotos }) => {
  if (allowPhotos) {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="small"
            type="url"
            name="photo1"
            label="Photo"
            style={{ margin: 8 }}
            margin="normal"
            placeholder="Add links to your photos"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="url"
            size="small"
            name="photo2"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="url"
            size="small"
            name="photo3"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
      </Grid>
    );
  }
  return null;
};

export default Photos;
