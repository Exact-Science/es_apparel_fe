/* eslint-disable arrow-body-style */
/* eslint-disable operator-assignment */
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
    let list = Object.entries(questionAnswers).map((answer) => answer[1]);
    const sortedList = [];
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].answerer_name.toLowerCase().includes('seller')) {
        sortedList.push(list[i]);
        list.splice(i, 1);
        i = i - 1;
      }
    }
    sortedList.sort((a, b) => {
      return (a.helpfulness < b.helpfulness) ? 1 : -1;
    });
    list.sort((a, b) => {
      return (a.helpfulness < b.helpfulness) ? 1 : -1;
    });
    list = sortedList.concat(list);
    this.setState({ list, filteredList: list.slice(0, count) });
  }

  addMoreAnswers = (e) => {
    e.preventDefault();
    const { list } = this.state;
    this.setState({
      list,
      filteredList: list,
      count: list.length + 1,
    });
  }

  resetAnswers = (e) => {
    e.preventDefault();
    const { list, resetCount } = this.state;
    this.setState({ filteredList: list.slice(0, resetCount), count: resetCount });
  }

  showAddedAnswer = (id) => {
    const sortedList = [];
    const url = process.env.REACT_APP_API_ROUTE;
    console.log(`${url}/qa/${id}/answers?count=1000`)
    fetch(`${url}/qa/${id}/answers?count=1000`)
      .then((results) => results.json())
      .then((answersList) => {
        let newList = answersList.results;
        console.log("newly added answer: ", newList)
        newList = newList.map((answer) => {
          answer.id = answer.answer_id;
          answer.photos = answer.photos.map((photo) => photo.url);
          return answer;
        });
        for (let i = 0; i < newList.length; i += 1) {
          if (newList[i].answerer_name.toLowerCase().includes('seller')) {
            sortedList.push(newList[i]);
            newList.splice(i, 1);
            i = i - 1;
          }
        }

        sortedList.sort((a, b) => {
          return (a.helpfulness < b.helpfulness) ? 1 : -1;
        });

        newList.sort((a, b) => {
          return (a.helpfulness < b.helpfulness) ? 1 : -1;
        });

        newList = sortedList.concat(newList);
        return newList;
      })
      .then((list) => {
        this.setState({ list, filteredList: list.slice(0, 2) });
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
        {list.length > 0 ? (
          <div className="qna-answer-container">
            <div className="answer-identifier">A: </div>
            <div className="qna-question-answers">
              {count > resetCount ? list.map(
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
              )
                : filteredList.map(
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
        ) : null}
        <div className="qna-add-more-answers">
          { count < list.length ? <button className="textButton" type="submit" onClick={this.addMoreAnswers}>Load More Answers</button> : null }
          { count > resetCount && count >= list.length ? <button className="textButton" type="submit" onClick={this.resetAnswers}>Collapse Answers</button> : null }
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
