import React from 'react';
import './qna-List.styles.scss';

const QnAList = (props) => {
  // console.log("the props: ", props);
  const question_body = props.question_body;
  return (
    // const {question_body} = props.question_body;}
    <div className="qna-List-container">
      <br />
      <div>{question_body}</div>
    </div>
  );
};

export default QnAList;
