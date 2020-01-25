import React from 'react';
import propTypes from 'prop-types';
import Answer from '../answer/qna-answer.component';
import './qna-question.styles.scss';

const Question = ({ questionBody, questionAnswers }) => (
  <div className="qna-Question">
    <div>{questionBody}</div>
    {Object.keys(questionAnswers).map(
      (answer) => <Answer answerBody={questionAnswers[answer].body} answerImages={questionAnswers[answer].photos} key={`a${questionAnswers[answer].id}`} />,
    )}
  </div>
);

Question.propTypes = {
  questionBody: propTypes.string.isRequired,
  questionAnswers: propTypes.shape({}).isRequired,
};

export default Question;
