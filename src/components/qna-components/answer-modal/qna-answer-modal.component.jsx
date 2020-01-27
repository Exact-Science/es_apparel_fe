import React from 'react';
import propTypes from 'prop-types';
import './qna-answer-modal.styles.scss';

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerBody: '',
      nickName: '',
      email: '',
      showImage: false,
    };
  }

  handleFormChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value }, this.showImageOption());
  }

  showImageOption = () => {
    const {
      answerBody,
      nickName,
      email,
      showImage,
    } = this.state;

    if (answerBody && nickName && email) {
      this.setState({ showImage: true });
    } else if (!answerBody || !nickName || !email) {
      this.setState({ showImage: false });
    }
  }

  render() {
    const { questionId, showAddAnswerModal } = this.props;
    const { showImage } = this.state;
    return (
      <div className="qna-answer-modal">
        <div className="qna-answer-modal-content">
          <form>
            <div className="qna-answer-title">
              Submit your Answer
            </div>
            <div>
              Product Name: Question Body
              <div>
                <p>Your Answer*</p>
                <textarea className="qna-answer-body" name="answerBody" maxLength="1000" onChange={this.handleFormChanges} />
                <p>Nickname*</p>
                <input type="text" className="qna-answer-email" name="nickName" maxLength="60" placeholder="Example: jack543!" onChange={this.handleFormChanges} />
                <br />
                For privacy reasons, do not use your full name or email address
                <p>Email*</p>
                <input type="email" className="qna-answer-email" name="email" maxLength="60" placeholder="Example: jack@email.com" onChange={this.handleFormChanges} />
                <br />
                For authentication reasons, you will not be emailed
                {showImage
                  ? (
                    <div>
                      <p>Add urls to your supporting images</p>
                      <input className="qna-answer-url" type="url" />
                      <br />
                      <input className="qna-answer-url" type="url" />
                      <br />
                      <input className="qna-answer-url" type="url" />
                      <br />
                      <input className="qna-answer-url" type="url" />
                      <br />
                      <input className="qna-answer-url" type="url" />
                      <br />
                    </div>
                  )
                  : null}
              </div>
            </div>
            <div className="qna-answer-button-container">
              <button className="qna-answer-modal-cancel-button" type="submit" onClick={(e) => showAddAnswerModal(e)}>Cancel</button>
              <button className="qna-answer-modal-submit-button" type="submit" onClick={(e) => showAddAnswerModal(e)}>Submit</button>
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
