import React from 'react';
import './qna-list.styles.scss';
import propTypes from 'prop-types';
import Question from '../question/qna-question.component';

const List = ({
  id,
  questionBody,
  questionAnswers,
  questionId,
  questionHelpfulness,
}) => (
  <div className="qna-list-container">
    <Question
      id={id}
      questionId={questionId}
      questionBody={questionBody}
      questionHelpfulness={questionHelpfulness}
      questionAnswers={questionAnswers}
    />
  </div>
);


List.propTypes = {
  id: propTypes.string.isRequired,
  questionId: propTypes.number.isRequired,
  questionBody: propTypes.string.isRequired,
  questionHelpfulness: propTypes.number.isRequired,
  questionAnswers: propTypes.shape({}).isRequired,
};

export default List;
