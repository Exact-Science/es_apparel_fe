import React from 'react';
import propTypes from 'prop-types';
import Answer from '../answer/qna-answer.component';
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
      questionAnswers,
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
        <div className="qna-answer-container">
          <div className="answer-identifier">A: </div>
          <div>
            {Object.keys(questionAnswers).map(
              (answer) => (
                <Answer
                  answerId={questionAnswers[answer].id}
                  answerBody={questionAnswers[answer].body}
                  answerDate={questionAnswers[answer].date}
                  answerHelpfulness={questionAnswers[answer].helpfulness}
                  answererName={questionAnswers[answer].answerer_name}
                  answerImages={questionAnswers[answer].photos}
                  key={`a${questionAnswers[answer].id}`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    )
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
