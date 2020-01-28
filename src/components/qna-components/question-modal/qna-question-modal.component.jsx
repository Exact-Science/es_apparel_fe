import React from 'react';
import propTypes from 'prop-types';
import './qna-question-modal.styles.scss';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { showAddQuestionModal } = this.props;
    return (
      <div className="qna-question-modal">
        <div className="qna-question-modal-content">
          <form>
            <div className="qna-question-title">
              Ask your question
            </div>
            <div>
              About the Product Name Here
              <div>
                <p>Your question*</p>
                <textarea className="qna-question-body" name="questionBody" maxLength="1000" onChange={this.handleFormChanges} />
                <p>Nickname*</p>
                <input type="text" className="qna-question-email" name="nickName" maxLength="60" placeholder="Example: jack543!" onChange={this.handleFormChanges} />
                <br />
                For privacy reasons, do not use your full name or email address
                <p>Email*</p>
                <input type="email" className="qna-question-email" name="email" maxLength="60" placeholder="Example: jack@email.com" onChange={this.handleFormChanges} />
                <br />
                For authentication reasons, you will not be emailed
              </div>
            </div>
            <div className="qna-question-button-container">
              <button className="qna-question-modal-cancel-button" type="submit" onClick={(e) => showAddQuestionModal(e)}>Cancel</button>
              <button className="qna-question-modal-submit-button" type="submit" onClick={(e) => showAddQuestionModal(e)}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
QuestionModal.propTypes = {
  showAddQuestionModal: propTypes.func.isRequired,
};

export default QuestionModal;
