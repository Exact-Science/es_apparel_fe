import React from 'react';
import './qna-image.styles.scss';
import propTypes from 'prop-types';

const Image = ({ imageUrl }) => (
  <div className="qna-image">
    <img src={imageUrl} alt="test" />
  </div>
);

Image.propTypes = {
  imageUrl: propTypes.string.isRequired,
  // questionAnswers: propTypes.shape({
  //   id: propTypes.number,
  //   body: propTypes.string,
  //   date: propTypes.string,
  //   answerer_name: propTypes.string,
  //   helpfulness: propTypes.string,
  //   photos: propTypes.arrayOf(propTypes.string),
  // }).isRequired,
};

export default Image;
