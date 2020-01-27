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
    const { questionHelpfulness } = this.state;
    const { questionHelpfulClicked } = this.state;
    const { openAnswerModal } = this.state;
    const { questionId } = this.props;
    return (
      <div>
        <div className="qna-q-utility">
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
        <div className="qna-a-utility">
          <button className="addAnswerButton" type="submit" onClick={(e) => this.showAddAnswerModal(e)}>Add Answer</button>
        </div>
        {openAnswerModal ? <AnswerModal questionId={questionId} showAddAnswerModal={this.showAddAnswerModal} /> : null }
      </div>
    );
  }
}


Utility.propTypes = {
  questionId: propTypes.number.isRequired,
  questionHelpfulness: propTypes.number.isRequired,
};

export default Utility;
