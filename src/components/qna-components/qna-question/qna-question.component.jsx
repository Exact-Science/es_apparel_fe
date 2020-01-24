import React from 'react';
import propTypes from 'prop-types';
import QnAAnswer from '../qna-answer/qna-answer.component'
import './qna-question.styles.scss';

const QnAQuestion = ({ questionBody, questionAnswers }) => {
  // console.log("the props: ", props);
  return (
    // const {question_body} = props.question_body;}
    <div className="qna-Question">
      <br />
      <div>{questionBody}</div>
      {/* {questionAnswers} */}
      {/* {questionAnswers.forEach((answer)=>{console.log(answer.id)})} */}
      {Object.keys(questionAnswers).map((answer) => console.log(answer.body)) }
    </div>
  );
};

QnAQuestion.propTypes = {
  questionBody: propTypes.string.isRequired,
  questionAnswers: propTypes.shape({
    id: propTypes.number,
    body: propTypes.string,
    date: propTypes.string,
    answerer_name: propTypes.string,
    helpfulness: propTypes.string,
    photos: propTypes.arrayOf(propTypes.string),
  }).isRequired,
};

export default QnAQuestion;
