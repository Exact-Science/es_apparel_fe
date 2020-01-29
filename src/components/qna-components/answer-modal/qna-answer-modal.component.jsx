import React from 'react';
import propTypes from 'prop-types';
import './qna-answer-modal.styles.scss';

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  addAnswer = (e) => {
    e.persist();
    e.preventDefault();
    const { showAddAnswerModal } = this.props;
    const { questionId } = this.props;
    const form = document.querySelector('.qna-new-answer-form');
    const formData = new FormData(form);
    const data = {};
    let imageUrls = [];

    for (var pair of formData.entries()) {
      if (pair[0].substr(0, 3) === 'url' && pair[1]) {
        imageUrls.push(pair[1])
      } else if (pair[0].substr(0, 3) !== 'url') {
        data[pair[0]] = pair[1];
      }
    };

    data.photos = imageUrls;
    console.log(data);

    // fetch(`http://3.134.102.30/qa/${questionId}/answers`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(() => showAddAnswerModal(e));
  }

  render() {
    const { questionId, showAddAnswerModal } = this.props;
    const { showImage } = this.state;
    const { addAnswer } = this.addAnswer;
    return (
      <div className="qna-answer-modal">
        <div className="qna-answer-modal-content">
          <form className="qna-new-answer-form" name="answerForm">
            <div className="qna-answer-title">
              Submit your Answer
            </div>
            <div>
              Product Name: Question Body
              <div>
                <p>Your Answer*</p>
                <textarea className="qna-answer-body" name="body" maxLength="1000" onChange={this.handleFormChanges} />
                <p>Nickname*</p>
                <input type="text" className="qna-answer-email" name="name" maxLength="60" placeholder="Example: jack543!" onChange={this.handleFormChanges} />
                <br />
                For privacy reasons, do not use your full name or email address
                <p>Email*</p>
                <input type="email" className="qna-answer-email" name="email" maxLength="60" placeholder="Example: jack@email.com" onChange={this.handleFormChanges} />
                <br />
                For authentication reasons, you will not be emailed
                <div className="qna-answer-image-urls">
                  <p>Add urls to your supporting images</p>
                  <input className="qna-answer-url" name="url1" type="url" />
                  <br />
                  <input className="qna-answer-url" name="url2" type="url" />
                  <br />
                  <input className="qna-answer-url" name="url3" type="url" />
                  <br />
                  <input className="qna-answer-url" name="url4" type="url" />
                  <br />
                  <input className="qna-answer-url" name="url5" type="url" />
                  <br />
                </div>
              </div>
            </div>
            <div className="qna-answer-button-container">
              <button className="qna-answer-modal-cancel-button" type="submit" onClick={(e) => showAddAnswerModal(e)}>Cancel</button>
              <button className="qna-answer-modal-submit-button" type="submit" onClick={(e) => this.addAnswer(e)}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
AnswerModal.propTypes = {
  questionId: propTypes.number.isRequired,
  showAddAnswerModal: propTypes.func.isRequired,
};

export default AnswerModal;
