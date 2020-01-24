import React from 'react';
import propTypes from 'prop-types';
import QnAAnswer from '../answer/qna-answer.component';
import './qna-question.styles.scss';

const QnAQuestion = ({ questionBody, questionAnswers }) => (
  <div className="qna-Question">
    <br />
    <div>{questionBody}</div>
    {Object.keys(questionAnswers).map(
      (answer) => <QnAAnswer answerBody={questionAnswers[answer].body} answerImages={questionAnswers[answer].photos} key={`a${questionAnswers[answer].id}`} />,
    )}
  </div>
);

QnAQuestion.propTypes = {
  questionBody: propTypes.string.isRequired,
  questionAnswers: propTypes.shape({
    // id: propTypes.number,
    body: propTypes.string,
    // date: propTypes.string,
    // answerer_name: propTypes.string,
    // helpfulness: propTypes.string,
    photos: propTypes.arrayOf(propTypes.string),
  }).isRequired,
};

export default QnAQuestion;
