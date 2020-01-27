import React from 'react';
import propTypes from 'prop-types';
import Image from '../image/qna-image.component';
import './qna-answer.styles.scss';

const Answer = ({ answerBody, answerImages }) => (
  <div className="qna-answers-list">
    {answerBody}
    <div className="qna-images-container">
      {answerImages.map((imageUrl) => <Image imageUrl={imageUrl} key={`i${imageUrl}`} />)}
    </div>
  </div>
);

Answer.propTypes = {
  answerBody: propTypes.string.isRequired,
  answerImages: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Answer;
