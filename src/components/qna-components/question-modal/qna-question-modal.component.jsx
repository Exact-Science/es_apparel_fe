/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import propTypes from 'prop-types';
import './qna-question-modal.styles.scss';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      body: '',
      name: '',
      email: '',
      bodyVal: true,
      nameVal: true,
      emailVal: true,
    };
  }

  componentDidMount() {
    const { id } = this.props;
    const url = process.env.REACT_APP_API_ROUTE;
    // requires a fetch to the product endpoint (separate service)
    // fetch(`${url}/products/${id}`)
    //   .then((results) => results.json())
    //   .then((data) => this.setState({ productName: data.name }));
  }

  addQuestion = (e) => {
    const {
      body,
      name,
      email,
      bodyVal,
      nameVal,
      emailVal,
    } = this.state;
    const url = process.env.REACT_APP_API_ROUTE;

    if (body && name && email && email.includes('@')) {
      e.preventDefault();
      e.persist();
      const { id, showAddQuestionModal, addNewQuestions } = this.props;
      const form = document.querySelector('.qna-new-question-form');
      const formData = new FormData(form);
      const data = {};

      for (const pair of formData.entries()) {
        data[pair[0]] = pair[1];
      }

      fetch(`${url}/qa/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(() => showAddQuestionModal(e))
        .then(() => addNewQuestions(id))
        .then(() => true);
    }
    else {
      if (body && !bodyVal) {
        this.setState({ bodyVal: true });
      } else if (!body && bodyVal) {
        this.setState({ bodyVal: false });
      }
      if (name && !nameVal) {
        this.setState({ nameVal: true });
      } else if (!name && nameVal) {
        this.setState({ nameVal: false });
      }
      if (email && !emailVal) {
        if (!email.includes('@')) {
          this.setState({ emailVal: true });
        }
      } else if (!email && emailVal) {
        this.setState({ emailVal: false });
      }
      return false;
    }
  }

  handleFormChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {
      productName,
      name,
      body,
      email,
      bodyVal,
      nameVal,
      emailVal,
    } = this.state;
    const { showAddQuestionModal } = this.props;
    return (
      <div className="qna-question-modal">
        <div className="qna-question-modal-content">
          <form className="qna-new-question-form" name="questionForm" onSubmit={() => this.addQuestion}>
            <h2 className="title">
              Ask your question
            </h2>
            {/* requires use of the product endpoint (separate service) */}
            {/* <h3 className="subTitle">
              <span>
                About the
                <span> {productName}</span>
              </span>
            </h3> */}
            <div>
              <div className="formField-container">
                <span className="valid-field">Your question*</span>
                {!body && !bodyVal ? <span className="invalid-field"> (Required Field)</span> : null}
                <div className="fieldContainer">
                  <textarea required className="textFormField" name="body" maxLength="1000" onChange={this.handleFormChanges} />
                </div>
              </div>
              <div className="formField-container">
                <span className="valid-field">Nickname*</span>
                {!name && !nameVal ? <span className="invalid-field"> (Required Field)</span> : null}
                <div className="formField">
                  <input required type="text" className="formField" name="name" maxLength="60" placeholder="Example: jack543!" onChange={this.handleFormChanges} />
                </div>
                For privacy reasons, do not use your full name or email address
              </div>
              <div className="formField-container">
                <span className="valid-field">Email*</span>
                {!email && !emailVal ? <span className="invalid-field"> (Required Field)</span> : null}
                <div className="formField">
                  <input required type="email" className="formField" name="email" maxLength="60" placeholder="Example: jack@email.com" onChange={this.handleFormChanges} />
                </div>
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
