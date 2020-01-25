import React from 'react';
import propTypes from 'prop-types';

const ListHeader = ({ number }) => (
  <h1>
    There are
    {number}
    reviews
  </h1>
);

ListHeader.propTypes = {
  number: propTypes.number.isRequired,
};