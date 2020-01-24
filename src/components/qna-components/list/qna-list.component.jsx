import React from 'react';
import './qna-list.styles.scss';
import propTypes from 'prop-types';
import Question from '../question/qna-question.component';

const QnAList = ({ questionBody, questionAnswers }) => {
  // console.log("the props: ", props);

  return (
    // const {question_body} = props.question_body;}
    <div className="qna-List-container">
      <br />
      <Question questionBody={questionBody} questionAnswers={questionAnswers} />
    </div>
  );
};


QnAList.propTypes = {
  questionBody: propTypes.string.isRequired,
  questionAnswers: propTypes.shape({}).isRequired,
};

export default QnAList;
