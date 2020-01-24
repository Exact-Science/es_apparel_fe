import React from 'react';
import './qna-answer.styles.scss';
import propTypes from 'prop-types';
import Question from '../qna-question/qna-question.component';

const QnAAnswer = (props) => {
  // console.log("the props: ", props);
  const { questionBody } = props;
  return (
    // const {question_body} = props.question_body;}
    <div className="qna-List-container">
      <br />
      <Question questionBody={questionBody} />
    </div>
  );
};

QnA.propTypes = {
  questionBody: propTypes.string.isRequired,
};

export default QnAList;
