/* eslint-disable no-param-reassign */
import React from 'react';
import './qna-list.styles.scss';
import propTypes from 'prop-types';
import Question from '../question/qna-question.component';
import Answer from '../answer/qna-answer.component';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resetCount: 2,
      count: 2,
      list: [],
      filteredList: [],
    };
  }

  componentDidMount() {
    const { questionAnswers } = this.props;
    const { count } = this.state;
    const list = Object.entries(questionAnswers).map((answer) => answer[1]);
    this.setState({ list, filteredList: list.slice(0, count) });
  }

  addMoreAnswers = (e) => {
    e.preventDefault();
    const { list } = this.state;
    this.setState({
      count: list.length,
      filteredList: list,
    });
  }

  resetAnswers = (e) => {
    e.preventDefault();
    const { list, resetCount } = this.state;
    this.setState({ filteredList: list.slice(0, resetCount), count: resetCount });
  }

  showAddedAnswer = (id) => {
    fetch(`http://3.134.102.30/qa/${id}/answers`)
      .then((results) => results.json())
      .then((answersList) => {
        let newList = answersList.results;
        newList = newList.map((answer) => {
          answer.id = answer.answer_id;
          answer.photos = answer.photos.map((photo) => photo.url);
          return answer;
        });
        this.setState({ list: newList, filteredList: newList.slice(0, 2) });
      });
  }

  render() {
    const {
      id,
      questionBody,
      questionAnswers,
      questionId,
      questionHelpfulness,
    } = this.props;
    const {
      filteredList,
      count,
      resetCount,
      list,
    } = this.state;

    return (
      <div className="qna-list-container">
        <Question
          id={id}
          questionId={questionId}
          questionBody={questionBody}
          questionHelpfulness={questionHelpfulness}
          questionAnswers={questionAnswers}
          showAddedAnswer={this.showAddedAnswer}
        />
        <div className="qna-answer-container">
          <div className="answer-identifier">A: </div>
          <div className="qna-question-answers">
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
          { count < list.length ? <button className="textButton" type="submit" onClick={this.addMoreAnswers}>Load More Answers</button> : null }
          { count > resetCount ? <button className="textButton" type="submit" onClick={this.resetAnswers}>Collapse Answers</button> : null }
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
