import React from 'react';
import propTypes from 'prop-types';
import Image from '../image/qna-image.component';
import 
import './qna-answer.styles.scss';

const Answer = ({ answerId, answerBody, answerDate, answererName, answerHelpfulness, answerImages }) => (
  <div className="qna-answers-list">
    {answerBody}
    {answerImages.length > 0 ? (
      <div className="qna-images-container">
        {answerImages.map((imageUrl) => <Image imageUrl={imageUrl} key={`i${imageUrl}`} />)}
      </div>
    )
      : null }
    <div className="qna-answer-footerContainer">
      <div className="qna-answer-userName">
        by
        <span> </span>
        {answererName}
        <span>, </span>
        {answerDate}
        |
      </div>
    </div>
  </div>
);

Answer.propTypes = {
  answerId: propTypes.number.isRequired,
  answerBody: propTypes.string.isRequired,
  answerDate: propTypes.string.isRequired,
  answererName: propTypes.string.isRequired,
  answerHelpfulness: propTypes.number.isRequired,
  answerImages: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Answer;
