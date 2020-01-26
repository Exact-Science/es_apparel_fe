import React from 'react';
import './qna.styles.scss';
import propTypes from 'prop-types';
import List from '../list/qna-list.component';
import Search from '../search/qna-search.component';


class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }


  componentDidMount() {
    const { id } = this.props;
    fetch(`http://3.134.102.30/qa/${id}`)
      .then((results) => results.json())
      .then((list) => { this.setState({ list: list.results }); });
  }

  render() {
    const { list } = this.state;
    return (
      <div className="qna-container">
        <Search />
        <br />
        QUESTIONS
        &amp;
        ANSWERS

        {list.map((q) => <List questionAnswers={q.answers} questionBody={q.question_body} questionId={q.question_id} questionHelpfulness={q.question_helpfulness} key={`q${q.question_id}`} />)}
      </div>
    );
  }
}

QnA.propTypes = {
  id: propTypes.string.isRequired,
};

export default QnA;
