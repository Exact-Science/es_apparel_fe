import React from 'react';
import './qna-list.styles.scss';
import propTypes from 'prop-types';
import Question from '../question/qna-question.component';
import Utility from '../utility/qna-utility.component';

const List = ({
  questionBody,
  questionAnswers,
  questionId,
  questionHelpfulness,
}) => (
  <div className="qna-List-container">
    <div>
      <Question
        questionId={questionId}
        questionBody={questionBody}
        questionHelpfulness={questionHelpfulness}
        questionAnswers={questionAnswers}
      />
    </div>
    <div>
      <Utility questionId={questionId} questionHelpfulness={questionHelpfulness} />
    </div>
  </div>
);


List.propTypes = {
  questionId: propTypes.number.isRequired,
  questionBody: propTypes.string.isRequired,
  questionHelpfulness: propTypes.number.isRequired,
  questionAnswers: propTypes.shape({}).isRequired,
};

export default List;
