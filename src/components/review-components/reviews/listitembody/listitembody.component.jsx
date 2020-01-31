import React from 'react';
import propTypes from 'prop-types';

const ListItemBody = ({ summary, body }) => (
  <div>
    <h3>{summary}</h3>
    <p>{body}</p>
  </div>
);

export default ListItemBody;

ListItemBody.propTypes = {
  summary: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
};
