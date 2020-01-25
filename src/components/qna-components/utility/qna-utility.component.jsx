import React from 'react';
import propTypes from 'prop-types';
import './qna-utility.styles.scss';

class Utility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionHelpfulness: 0,
      questionHelpfulClicked: false,
      // answerModal: false,
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

  // showAddAnswerModal = (e) => {
  // e.preventDefault();
  // }

  render() {
    const { questionHelpfulness } = this.state;
    const { questionHelpfulClicked } = this.state;
    return (
      <div>
        <div className="qna-q-utility">
          <span>Helpful? </span>
          <button
            className={ questionHelpfulClicked ? 'helpfulButtonOff' : 'helpfulButtonOn'}
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
          <button className="addAnswerButton" type="submit">Add Answer</button>
        </div>
      </div>
    );
  }
}


Utility.propTypes = {
  questionId: propTypes.number.isRequired,
  questionHelpfulness: propTypes.number.isRequired,
};

export default Utility;
