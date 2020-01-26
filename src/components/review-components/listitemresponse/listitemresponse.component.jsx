import React from 'react';
import propTypes from 'prop-types';

const Response = ({ response }) => (
  <p>{response}</p>
);

export default Response;

Response.propTypes = {
  response: propTypes.string.isRequired,
};
