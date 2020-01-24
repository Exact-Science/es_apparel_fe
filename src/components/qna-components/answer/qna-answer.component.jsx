import React from 'react';
import propTypes from 'prop-types';
import Image from '../image/qna-image.component';
import './qna-answer.styles.scss';

const QnAAnswer = ({ answerBody, answerImages }) => (
  <div className="qna-answer-container">
    <ul>
      <li>
        {answerBody}
        <div className="qna-images-container">
          {answerImages.map((imageUrl) => <Image imageUrl={imageUrl} key={`i${imageUrl}`}/>)}
        </div>
      </li>
    </ul>
  </div>
);

QnAAnswer.propTypes = {
  answerBody: propTypes.string.isRequired,
  // questionAnswers: propTypes.shape({
  //   id: propTypes.number,
  //   body: propTypes.string,
  //   date: propTypes.string,
  //   answerer_name: propTypes.string,
  //   helpfulness: propTypes.string,
  answerImages: propTypes.arrayOf(propTypes.string),
  // }).isRequired,
};

export default QnAAnswer;
