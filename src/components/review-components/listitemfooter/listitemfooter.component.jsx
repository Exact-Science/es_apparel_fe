import React from 'react';
import propTypes from 'prop-types';

const ListItemFooter = ({ helpfulness }) => (
  <div>
    {helpfulness} people found this review helpful.
  </div>
);

export default ListItemFooter;

ListItemFooter.propTypes = {
  helpfulness: propTypes.number.isRequired,
};
