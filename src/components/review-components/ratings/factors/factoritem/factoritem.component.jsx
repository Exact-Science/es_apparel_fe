import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import breakdown from './factorbreakdown';
import './factoritem-styles.scss';

const FactorItem = ({ name, value }) => {
  return (
    <div className="factor-item">
      <Grid container>
        <Grid item xs={12}>
          <p className="factor-heading">{name}</p>
        </Grid>
        <Grid item xs={12}>
          <div className="chars-chart">
            <div><span id="triangle-down" style={{ left: `${(value / 5) * 100}%` }} /></div>
          </div>
        </Grid>
        <Grid container className="factor-descriptors">
          <Grid item xs={4} id="left">
            {breakdown[name][1]}
          </Grid>
          <Grid item xs={4} id="middle">
            {breakdown[name][3]}
          </Grid>
          <Grid item xs={4} id="right">
            {breakdown[name][5]}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FactorItem;

FactorItem.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
};
