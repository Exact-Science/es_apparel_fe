import React from 'react';
import './qna.styles.scss';
import propTypes from 'prop-types';
import List from '../list/qna-list.component';
import Search from '../search/qna-search.component';
import QuestionModal from '../question-modal/qna-question-modal.component';


class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resetCount: 2,
      count: 2,
      list: [],
      filteredList: [],
      openQuestionModal: false,
      searchCount: 0,
    };
  }

  componentDidMount() {
    const { id } = this.props;
    const { count } = this.state;
    fetch(`http://3.134.102.30/qa/${id}?count=1000`)
      .then((results) => results.json())
      .then((questionsList) => {
        this.setState({ list: questionsList.results },
          () => this.setState((previousState) => ({
            filteredList: previousState.list.slice(0, count),
          })));
      });
  }

  showAddQuestionModal = (e) => {
    e.preventDefault();
    const { openQuestionModal } = this.state;
    this.setState({ openQuestionModal: !openQuestionModal });
  }

  addMoreQuestions = (e) => {
    e.preventDefault();
    this.setState((previousState) => ({
      count: previousState.count + 2,
      filteredList: previousState.list.slice(0, previousState.count + 2),
    }));
  }

  searchQuestions = (e) => {
    const { list } = this.state;
    if (e.target.value.length > 2) {
      this.setState({
        filteredList: list.filter(
          (question) => question.question_body
            .toLowerCase()
            .includes(e.target.value.toLowerCase()),
        ),
        searchCount: e.target.value.length,
      });
    } else {
      this.setState({
        filteredList: list.slice(0, 2),
        searchCount: e.target.value.length,
        count: 2,
      });
    }
  }

  addNewQuestions = (id) => {
    const { resetCount } = this.state;
    fetch(`http://3.134.102.30/qa/${id}?count=1000`)
      .then((results) => results.json())
      .then((questionsList) => this.setState({
        list: questionsList.results,
        filteredList: questionsList.results.slice(0, resetCount),
      }));
  }


  render() {
    const { id } = this.props;
    const {
      openQuestionModal,
      filteredList,
      searchCount,
      count,
      list,
    } = this.state;
    return (
      <div className="qna-container">
        <p className="qna-title">QUESTIONS &amp; ANSWERS</p>
        <Search searchQuestions={this.searchQuestions} />
        <div className="qna-body">
          <div className="searchResult">
            { searchCount > 2 ? `# of Search Results: ${filteredList.length}` : null }
          </div>
          {filteredList.map((q) => (
            <List
              id={id}
              questionAnswers={q.answers}
              questionBody={q.question_body}
              questionId={q.question_id}
              questionHelpfulness={q.question_helpfulness}
              key={`q${q.question_id}`}
            />
          ))}
        </div>
        { count < list.length ? <button className="main-button" type="submit" onClick={this.addMoreQuestions}>MORE ANSWERED QUESTIONS</button> : null }
        <button className="main-button" type="submit" onClick={this.showAddQuestionModal}>ADD A QUESTION +</button>
        { openQuestionModal
          ? (
            <QuestionModal
              id={id}
              showAddQuestionModal={this.showAddQuestionModal}
              addNewQuestions={this.addNewQuestions}
            />
          )
          : null}
      </div>
    );
  }
}

QnA.propTypes = {
  id: propTypes.string.isRequired,
};

export default QnA;
