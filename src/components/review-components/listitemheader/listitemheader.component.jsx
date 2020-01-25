import React from 'react';
import propTypes from 'prop-types';
import './listitemheader-styles.scss';

const ListItemHeader = ({ rating, user, date }) => (
  <header>{`${rating} stars, ${user}, ${date}`}</header>
);

export default ListItemHeader;

ListItemHeader.propTypes = {
  rating: propTypes.number.isRequired,
  user: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};
