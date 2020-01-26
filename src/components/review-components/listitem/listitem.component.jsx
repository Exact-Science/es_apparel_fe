import React from 'react';
import propTypes from 'prop-types';
import ListItemHeader from '../listitemheader/listitemheader.component';
import ListItemFooter from '../listitemfooter/listitemfooter.component';
import ListItemBody from '../listitembody/listitembody.component';
import './listitem-styles.scss';

const ListItem = ({
  rating, user, date, summary, body, helpfulness,
}) => (
  <div className="listItem">
    <header>
      <ListItemHeader rating={rating} user={user} date={date} />
    </header>
    <ListItemBody summary={summary} body={body} />
    <footer>
      <ListItemFooter helpfulness={helpfulness} />
    </footer>
  </div>
);

export default ListItem;

ListItem.propTypes = {
  rating: propTypes.number.isRequired,
  user: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  helpfulness: propTypes.number.isRequired,
};
