import React from 'react';
import propTypes from 'prop-types';
import './listitemresponse-styles.scss';

const Response = ({ response }) => {
  if (response !== null && response.length > 0) {
    return <p className="response">{response}</p>;
  }
  return null;
};

export default Response;

Response.propTypes = {
  response: propTypes.string.isRequired,
};
