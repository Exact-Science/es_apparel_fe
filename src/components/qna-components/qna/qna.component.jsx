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
      count: 4,
      list: [],
      filteredList: [],
      openQuestionModal: false,
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

  render() {
    const { id } = this.props;
    const { openQuestionModal, filteredList } = this.state;
    return (
      <div className="qna-container">
        <p className="qna-title">QUESTIONS &amp; ANSWERS</p>
        <Search />
        {filteredList.map((q) => <List id={id} questionAnswers={q.answers} questionBody={q.question_body} questionId={q.question_id} questionHelpfulness={q.question_helpfulness} key={`q${q.question_id}`} />)}
        <button className="questions" type="submit" onClick={this.addMoreQuestions}>MORE ANSWERED QUESTIONS</button>
        <button className="questions" type="submit" onClick={this.showAddQuestionModal}>ADD A QUESTION +</button>
        { openQuestionModal ? (
          <QuestionModal
            showAddQuestionModal={this.showAddQuestionModal}
            id={id}
          />
        ) : null}
      </div>
    );
  }
}

QnA.propTypes = {
  id: propTypes.string.isRequired,
};

export default QnA;
