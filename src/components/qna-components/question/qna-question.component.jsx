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
    } = this.props;
    return (
      <div className="qna-question">
        <div className="question-utility-container">
          <div className="question-identifier">Q</div>
          <div className="question-utility">
            <div className="question-body">{questionBody}</div>
            <Utility
              id={id}
              questionId={questionId}
              questionBody={questionBody}
              questionHelpfulness={questionHelpfulness}
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
};

export default Question;
