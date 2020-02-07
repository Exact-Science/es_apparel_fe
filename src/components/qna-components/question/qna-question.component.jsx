import React from 'react';
import propTypes from 'prop-types';
import Utility from '../utility/qna-utility.component';
import './qna-question.styles.scss';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      id,
      questionId,
      questionBody,
      questionHelpfulness,
      showAddedAnswer,
    } = this.props;
    return (
      <div className="qna-question">
        <div className="question-utility-container">
          <div className="question-identifier"><span className="question-identifier-text">Q: </span></div>
          <div className="question-utility">
            <div className="question-body">{questionBody}</div>
            <Utility
              id={id}
              questionId={questionId}
              questionBody={questionBody}
              questionHelpfulness={questionHelpfulness}
              showAddedAnswer={showAddedAnswer}
            />
          </div>
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  id: propTypes.string.isRequired,
  questionId: propTypes.number.isRequired,
  questionBody: propTypes.string.isRequired,
  questionHelpfulness: propTypes.number.isRequired,
  questionAnswers: propTypes.shape({}).isRequired,
  showAddedAnswer: propTypes.func.isRequired,
};

export default Question;
