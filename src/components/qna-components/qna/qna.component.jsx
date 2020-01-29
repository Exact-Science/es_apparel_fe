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
      list: [],
      openQuestionModal: false,
    };
  }

  componentDidMount() {
    const { id } = this.props;
    fetch(`http://3.134.102.30/qa/${id}?count=2`)
      .then((results) => results.json())
      .then((list) => { this.setState({ list: list.results }); });
  }

  showAddQuestionModal = (e) => {
    e.preventDefault();
    const { openQuestionModal } = this.state;
    this.setState({ openQuestionModal: !openQuestionModal });
  }

  render() {
    const { id } = this.props;
    const { list } = this.state;
    const { openQuestionModal } = this.state;
    return (
      <div className="qna-container">
        <p className="qna-title">QUESTIONS &amp; ANSWERS</p>
        <Search />
        {list.map((q) => <List id={id} questionAnswers={q.answers} questionBody={q.question_body} questionId={q.question_id} questionHelpfulness={q.question_helpfulness} key={`q${q.question_id}`} />)}
        <button className="qna-add-question-button" type="submit" onClick={this.showAddQuestionModal}>ADD A QUESTION +</button>
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
