import React from 'react';
import propTypes from 'prop-types';
import Moment from 'moment';
import './qna-answer-utility.styles.scss';

class AnswerUtility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerHelpfulness: 0,
      answerHelpfulClicked: false,
    };
  }

  componentDidMount() {
    const { answerHelpfulness } = this.props;
    this.setState({ answerHelpfulness });
  }

  updateHelpful = (e) => {
    const { answerId } = this.props;
    e.preventDefault();
    this.setState((previousState) => ({
      questionHelpfulness: previousState.questionHelpfulness + 1,
    }),
    () => {
      const { answerHelpfulClicked } = this.state;
      this.setState({ answerHelpfulClicked: !answerHelpfulClicked }, () => {
        fetch(`http://3.134.102.30/qa/answer/${answerId}/helpful`,
          { method: 'PUT' });
      });
    });
  }

  render() {
    const { answerHelpfulness } = this.state;
    const { answerHelpfulClicked } = this.state;
    const { answererName } = this.props;
    const { answerDate } = this.props;

    return (
      <div className="qna-answer-utility-container">
        <div className="qna-answer-userName">
          by
          <span> </span>
          {answererName}
          <span>, </span>
          {Moment(answerDate).format('MMM Do YYYY')}
        </div>
        <div className="qna-answer-utility-divider" />
        <div className="qna-answer-helpfulness">
          <span>Helpful? </span>
          <button
            className={answerHelpfulClicked ? 'helpfulButtonOff' : 'helpfulButtonOn'}
            type="submit"
            onClick={(e) => this.updateHelpful(e)}
          >
            Yes
          </button>
          <span> (</span>
          <span>
            {answerHelpfulness}
            )
          </span>
        </div>
        <div className="qna-answer-utility-divider" />
      </div>
    );
  }
}


AnswerUtility.propTypes = {
  answerId: propTypes.number.isRequired,
  answerDate: propTypes.string.isRequired,
  answererName: propTypes.string.isRequired,
  answerHelpfulness: propTypes.number.isRequired,
};

export default AnswerUtility;
