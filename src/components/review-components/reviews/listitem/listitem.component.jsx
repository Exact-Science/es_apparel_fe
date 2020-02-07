import React from 'react';
import propTypes from 'prop-types';
import ListItemHeader from '../listitemheader/listitemheader.component';
import ListItemFooter from '../listitemfooter/listitemfooter.component';
import ListItemBody from '../listitembody/listitembody.component';
import Response from '../listitemresponse/listitemresponse.component';
import Thumbnails from '../thumbnails/thumbnails.component';
import './listitem-styles.scss';

const ListItem = ({
  rating, user, date, summary, body, helpfulness, id, response, images, enlargeImage, showFull,
}) => (
  <div className="listItem">
    <>
      <ListItemHeader rating={rating} user={user} date={date} />
      <ListItemBody summary={summary} body={body} />
      <Response response={response} />
      <Thumbnails images={images} enlargeImage={enlargeImage} showFull={showFull} />
      <ListItemFooter helpfulness={helpfulness} id={id} />
    </>
  </div>
);

export default ListItem;

ListItem.defaultProps = {
  response: '',
};

ListItem.propTypes = {
  rating: propTypes.number.isRequired,
  user: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  helpfulness: propTypes.number.isRequired,
  id: propTypes.number.isRequired,
  response: propTypes.string,
  images: propTypes.arrayOf(propTypes.object).isRequired,
  enlargeImage: propTypes.func.isRequired,
};
