import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import './listitemheader-styles.scss';

const ListItemHeader = ({ rating, user, date }) => (
  <h5 className="listItemHeader">
    <span className="headingStars">{`${rating} stars`}</span>
    <span className="userDate">{`${user}, ${moment(date).format('MMMM D, YYYY')}`}</span>
  </h5>
);

export default ListItemHeader;

ListItemHeader.propTypes = {
  rating: propTypes.number.isRequired,
  user: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};
