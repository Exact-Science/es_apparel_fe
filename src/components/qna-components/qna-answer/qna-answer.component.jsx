import React from 'react';
import './qna-answer.styles.scss';
import propTypes from 'prop-types';

const QnAAnswer = ({ answerBody }) => (
  <div className="qna-answer-container">
    <ul>
      <li>
        {answerBody}
      </li>
    </ul>
  </div>
);

QnAAnswer.propTypes = {
  answerBody: propTypes.string.isRequired,
  // questionAnswers: propTypes.shape({
  //   id: propTypes.number,
  //   body: propTypes.string,
  //   date: propTypes.string,
  //   answerer_name: propTypes.string,
  //   helpfulness: propTypes.string,
  //   photos: propTypes.arrayOf(propTypes.string),
  // }).isRequired,
};

export default QnAAnswer;
