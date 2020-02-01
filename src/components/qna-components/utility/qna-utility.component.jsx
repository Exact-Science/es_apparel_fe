import React from 'react';
import propTypes from 'prop-types';
import AnswerModal from '../answer-modal/qna-answer-modal.component';
import './qna-utility.styles.scss';

class Utility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionHelpfulness: 0,
      questionHelpfulClicked: false,
      openAnswerModal: false,
    };
  }

  componentDidMount() {
    const { questionHelpfulness } = this.props;
    this.setState({ questionHelpfulness });
  }

  updateHelpful = (e) => {
    const { questionId } = this.props;
    e.preventDefault();
    this.setState((previousState) => ({
      questionHelpfulness: previousState.questionHelpfulness + 1,
    }),
    () => {
      const { questionHelpfulClicked } = this.state;
      this.setState({ questionHelpfulClicked: !questionHelpfulClicked }, () => {
        fetch(`http://3.134.102.30/qa/question/${questionId}/helpful`,
          { method: 'PUT' });
      });
    });

  }

  showAddAnswerModal = (e) => {
    e.preventDefault();
    const { openAnswerModal } = this.state;
    this.setState({ openAnswerModal: !openAnswerModal });
  }

  render() {
    const { questionHelpfulness, questionHelpfulClicked, openAnswerModal } = this.state;
    const { id, questionId, questionBody, showAddedAnswer } = this.props;
    return (
      <div className="qna-utility-container">
        <div className="`qna-q-helpfulness`">
          <span>Helpful? </span>
          <button
            className={questionHelpfulClicked ? 'helpfulButtonOff' : 'helpfulButtonOn'}
            type="submit"
            onClick={(e) => this.updateHelpful(e)}
          >
          Yes
          </button>
          <span> (</span>
          <span>
            {questionHelpfulness}
            )
          </span>
        </div>
        <div className="qna-utility-divider" />
        <div className="qna-add-answer-utility">
          <button className="addAnswerButton" type="submit" onClick={(e) => this.showAddAnswerModal(e)}>Add Answer</button>
        </div>
        {openAnswerModal
          ? (
            <AnswerModal
              id={id}
              questionId={questionId}
              questionBody={questionBody}
              showAddAnswerModal={this.showAddAnswerModal}
              showAddedAnswer={showAddedAnswer}
            />
          ) : null }
      </div>
    );
  }
}


Utility.propTypes = {
  id: propTypes.string.isRequired,
  questionId: propTypes.number.isRequired,
  questionBody: propTypes.string.isRequired,
  questionHelpfulness: propTypes.number.isRequired,
  showAddedAnswer: propTypes.func.isRequired,
};

export default Utility;
