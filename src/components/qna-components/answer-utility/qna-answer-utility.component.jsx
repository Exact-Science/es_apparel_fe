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
      reported: false,
    };
  }

  componentDidMount() {
    const { answerHelpfulness, answererName } = this.props;
    this.setState({ answerHelpfulness });
  }

  updateHelpful = (e) => {
    e.preventDefault();
    const { answerId } = this.props;
    this.setState((previousState) => ({
      answerHelpfulness: previousState.answerHelpfulness + 1,
    }),
    () => {
      const { answerHelpfulClicked } = this.state;
      this.setState({ answerHelpfulClicked: !answerHelpfulClicked }, () => {
        fetch(`http://3.134.102.30/qa/answer/${answerId}/helpful`,
          { method: 'PUT' });
      });
    });
  }

  setReported = (e) => {
    e.preventDefault();
    const { answerId } = this.props;
    const { reported } = this.state;
    if (!reported) {
      this.setState({ reported: !reported }, () => (
        fetch(`http://3.134.102.30/qa/answer/${answerId}/report`, { method: 'PUT' })));
    }
  }

  render() {
    const { answerHelpfulness, answerHelpfulClicked, reported } = this.state;
    const { answererName, answerDate } = this.props;

    return (
      <div className="qna-answer-utility-container">
        <div className="qna-answer-userName">
          by
          <span> </span>
          <span>
            {answererName.toLowerCase().includes('seller') ? answererName.substring(0, answererName.length - 6) : answererName}
            <span className="seller">{answererName.toLowerCase().includes('seller') ? 'Seller' : null}</span>
            <span>, </span>
          </span>
          {Moment(answerDate).format('MMM Do YYYY')}
        </div>
        <div className="qna-answer-utility-divider" />
        <div className="qna-answer-helpfulness">
          <span>Helpful? </span>
          <button
            className={answerHelpfulClicked ? 'buttonOff' : 'buttonOn'}
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
        <button className={reported ? 'buttonOff' : 'buttonOn'} type="submit" onClick={(e) => this.setReported(e)}>{ !reported ? 'Report' : 'Reported'}</button>
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
