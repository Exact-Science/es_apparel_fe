import React from 'react';
import propTypes from 'prop-types';
import './listitemheader-styles.scss';

const ListItemHeader = ({ rating, user, date }) => (
  <header>
    <h4>{`${rating} stars, ${user}, ${date}`}</h4>
  </header>
);

export default ListItemHeader;

ListItemHeader.propTypes = {
  rating: propTypes.number.isRequired,
  user: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};
