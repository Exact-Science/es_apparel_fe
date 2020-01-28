import React from 'react';
import propTypes from 'prop-types';
import Image from '../image/qna-image.component';
import AnswerUtility from '../answer-utility/qna-answer-utility.component';
import './qna-answer.styles.scss';

const Answer = ({
  answerId,
  answerBody,
  answerDate,
  answererName,
  answerHelpfulness,
  answerImages,
}) => (
  <div className="qna-answers-list">
    <div className="qna-answer-bodyDescription">{answerBody}</div>
    {answerImages.length ? (
      <div className="qna-images-container">
        {answerImages.map((imageUrl) => <Image imageUrl={imageUrl} key={`i${imageUrl}`} />)}
      </div>
    )
      : null }
    <AnswerUtility
      answerId={answerId}
      answerDate={answerDate}
      answererName={answererName}
      answerHelpfulness={answerHelpfulness}
    />
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
