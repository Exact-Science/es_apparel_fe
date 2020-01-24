import React from 'react';
import propTypes from 'prop-types';
import Question from '../question/qna-question.component';
import './qna-utility.styles.scss';

class Utility extends React.component {
  constructor(props) {
    super(props) {
      this.state = {
        helpful: 0;
      }
    }
  }
  render() {
    return (
      <div>
        Helpful?
        <a href="#">yes</a>
      </div>
    )
  }
}


QnAQuestion.propTypes = {
  questionId: propTypes.string.isRequired,
};

export default Utility;
