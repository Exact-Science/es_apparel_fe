import React from 'react';
import propTypes from 'prop-types';
import './qna-question.styles.scss';

const QnAQuestion = (props) => {
  // console.log("the props: ", props);
  const { questionBody } = props;
  return (
    // const {question_body} = props.question_body;}
    <div className="qna-Question">
      <br />
      <div>{questionBody}</div>
    </div>
  );
};

QnAQuestion.propTypes = {
  questionBody: propTypes.string.isRequired,
};

export default QnAQuestion;
