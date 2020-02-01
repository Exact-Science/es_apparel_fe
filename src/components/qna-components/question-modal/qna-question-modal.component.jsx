/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import propTypes from 'prop-types';
import './qna-question-modal.styles.scss';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      name: '',
      email: '',
    };
  }


  componentDidMount() {
    const { id } = this.props;
    fetch(`http://3.134.102.30/products/${id}`)
      .then((results) => results.json())
      .then((data) => this.setState({ name: data.name }));
  }

  addQuestion = (e) => {
    e.persist();
    const { body, name, email } = this.state;
    if (body && name && email) {
      const { id, showAddQuestionModal, addNewQuestions } = this.props;
      const form = document.querySelector('.qna-new-question-form');
      const formData = new FormData(form);
      const data = {};

      for (const pair of formData.entries()) {
        data[pair[0]] = pair[1];
      }

      fetch(`http://3.134.102.30/qa/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(() => showAddQuestionModal(e))
        .then(() => addNewQuestions(id));
    }
  }

  handleFormChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name } = this.state;
    const { showAddQuestionModal } = this.props;
    return (
      <div className="qna-question-modal">
        <div className="qna-question-modal-content">
          <form className="qna-new-question-form" name="questionForm">
            <div className="qna-question-title">
              Ask your question
            </div>
            <div className="productTitle">
              <span>About the </span>
              {name}
              <div>
                <p>Your question*</p>
                <textarea required className="qna-question-body" name="body" maxLength="1000" onChange={this.handleFormChanges} />
                <p>Nickname*</p>
                <input required type="text" className="qna-question-email" name="name" maxLength="60" placeholder="Example: jack543!" onChange={this.handleFormChanges} />
                <br />
                For privacy reasons, do not use your full name or email address
                <p>Email*</p>
                <input required type="email" className="qna-question-email" name="email" maxLength="60" placeholder="Example: jack@email.com" onChange={this.handleFormChanges} />
                <br />
                For authentication reasons, you will not be emailed
              </div>
            </div>
            <div className="qna-question-button-container">
              <button className="main-button" type="submit" onClick={(e) => showAddQuestionModal(e)}>Cancel</button>
              <button className="main-button" type="submit" onClick={(e) => this.addQuestion(e)}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
QuestionModal.propTypes = {
  id: propTypes.string.isRequired,
  showAddQuestionModal: propTypes.func.isRequired,
  addNewQuestions: propTypes.func.isRequired,
};

export default QuestionModal;
