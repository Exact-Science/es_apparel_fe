import React from 'react';
import propTypes from 'prop-types';
import './qna-answer-modal.styles.scss';

const AnswerModal = ({ questionId, showAddAnswerModal }) => (
  <div className="qna-answer-modal">
    <div className="qna-answer-modal-content">
      {/* {console.log(questionId)} */}
      This will be the modal that adds a new answer
      <br />
      <br />
      <button className="qna-answer-modal-cancel-button" type="submit" onClick={(e) => showAddAnswerModal(e)}>Cancel</button>
      <button className="qna-answer-modal-submit-button" type="submit" onClick={(e) => showAddAnswerModal(e)}>Submit</button>
    </div>
  </div>
);

AnswerModal.propTypes = {
  questionId: propTypes.number.isRequired,
  showAddAnswerModal: propTypes.func.isRequired,
};

export default AnswerModal;
