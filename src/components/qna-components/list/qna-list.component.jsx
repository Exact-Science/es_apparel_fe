import React from 'react';
import './qna-list.styles.scss';
import propTypes from 'prop-types';
import Question from '../question/qna-question.component';
import Answer from '../answer/qna-answer.component';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
      list: [],
      filteredList: [],
    };
  }

  componentDidMount() {
    const { questionAnswers } = this.props;
    const { count, filteredList } = this.state;
    const list = Object.entries(questionAnswers).map((answer) => answer[1]);
    this.setState({ list, filteredList: list.slice(0, count) });
  }

  addMoreAnswers = (e) => {
    e.preventDefault();
    this.setState((previousState) => ({
      count: previousState.count + 2,
      filteredList: previousState.list.slice(0, previousState.count + 2),
    }));
  }

  render() {
    const {
      id,
      questionBody,
      questionAnswers,
      questionId,
      questionHelpfulness,
    } = this.props;
    const { filteredList } = this.state;

    return (
      <div className="qna-list-container">
        <Question
          id={id}
          questionId={questionId}
          questionBody={questionBody}
          questionHelpfulness={questionHelpfulness}
          questionAnswers={questionAnswers}
        />
        <div className="qna-answer-container">
          <div className="answer-identifier">A: </div>
          <div>
            {filteredList.map(
              (answer) => (
                <Answer
                  answerId={answer.id}
                  answerBody={answer.body}
                  answerDate={answer.date}
                  answerHelpfulness={answer.helpfulness}
                  answererName={answer.answerer_name}
                  answerImages={answer.photos}
                  addMoreAnswer={this.addMoreAnswers}
                  key={`a${answer.id}`}
                />
              ),
            )}
          </div>
        </div>
        <div className="qna-add-more-answers">
          <button className="textButton" type="submit" onClick={this.addMoreAnswers}>Load More Answers</button>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  id: propTypes.string.isRequired,
  questionId: propTypes.number.isRequired,
  questionBody: propTypes.string.isRequired,
  questionHelpfulness: propTypes.number.isRequired,
  questionAnswers: propTypes.shape({}).isRequired,
};

export default List;
