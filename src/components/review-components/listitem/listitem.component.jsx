import React from 'react';
import propTypes from 'prop-types';
import ListItemHeader from '../listitemheader/listitemheader.component';
import ListItemFooter from '../listitemfooter/listitemfooter.component';
import ListItemBody from '../listitembody/listitembody.component';
// import Response from '../listitemresponse/listitemresponse.component';
import Thumbnails from '../thumbnails/thumbnails.component';
import './listitem-styles.scss';

const ListItem = ({
  rating, user, date, summary, body, helpfulness, id, response, images,
}) => (
  <div className="listItem">
    <header>
      <ListItemHeader rating={rating} user={user} date={date} />
    </header>
    <div>
      <ListItemBody summary={summary} body={body} />
    </div>
    <div>
      {/* <Response response={response} /> */}
    </div>
    <div>
      <Thumbnails images={images} />
    </div>
    <footer>
      <ListItemFooter helpfulness={helpfulness} id={id} />
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
  id: propTypes.number.isRequired,
  // response: propTypes.string.isRequired,
  images: propTypes.arrayOf(propTypes.object).isRequired,
};
