import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import './listitemheader-styles.scss';

const StyledRating = withStyles({
  iconFilled: {
    color: '#222',
  },
})(Rating);

const ListItemHeader = ({ rating, user, date }) => (
  <h5 className="listItemHeader">
    <span className="headingStars">
      <StyledRating name="read-only" value={rating} size="small" readOnly />
    </span>
    <span className="userDate">{`${user}, ${moment(date).format('MMMM D, YYYY')}`}</span>
  </h5>
);

export default ListItemHeader;

ListItemHeader.propTypes = {
  rating: propTypes.number.isRequired,
  user: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};
