import React from 'react';
import propTypes from 'prop-types';
import './qna-answer-modal.styles.scss';

const AnswerModal = ({ questionId }) => (
  <div className="qna-answer-modal">
    Answer Modal for question:
    {questionId}
    <div>here we have more stuff</div>
  </div>
);

AnswerModal.propTypes = {
  questionId: propTypes.number.isRequired,
};

export default AnswerModal;
