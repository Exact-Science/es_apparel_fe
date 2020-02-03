/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import propTypes from 'prop-types';
import './qna-answer-modal.styles.scss';

class AnswerModal extends React.Component {
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
    fetch(`http://3.134.102.30/products/${id}`)
      .then((results) => results.json())
      .then((data) => this.setState({ productName: data.name }));
  }

  addAnswer = (e) => {
    const {
      body,
      name,
      email,
      bodyVal,
      nameVal,
      emailVal,
    } = this.state;

    if (body && name && email && email.includes('@')) {
      e.preventDefault();
      e.persist();
      const { questionId, showAddedAnswer, showAddAnswerModal } = this.props;
      const form = document.querySelector('.qna-new-answer-form');
      const formData = new FormData(form);
      const data = {};
      const imageUrls = [];

      for (const pair of formData.entries()) {
        if (pair[0].substr(0, 3) === 'url' && pair[1]) {
          imageUrls.push(pair[1]);
        } else if (pair[0].substr(0, 3) !== 'url') {
          data[pair[0]] = pair[1];
        }
      }

      data.photos = imageUrls;

      fetch(`http://3.134.102.30/qa/${questionId}/answers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(() => showAddedAnswer(questionId))
        .then(() => showAddAnswerModal(e))
        .then(() => true);
    } else {
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
    const { productName, name, body, email, bodyVal, nameVal, emailVal } = this.state;
    const { showAddAnswerModal } = this.props;
    return (
      <div className="qna-answer-modal">
        <div className="qna-answer-modal-content">
          <form className="qna-new-answer-form" name="answerForm" onSubmit={() => this.addAnswer}>
            <h2 className="title">
             Submit your Answer
            </h2>
            <h3 className="subTitle">
              <span>
                {productName}
              </span>
            </h3>
            <div>
              <div className="formField-container">
                <span className="valid-field">Your answer*</span>
                {!body && !bodyVal ? <span className="invalid-field"> (Required Field)</span> : null}
                <div>
                  <textarea required className="textFormField" name="body" maxLength="1000" onChange={this.handleFormChanges} />
                </div>
              </div>
              <div className="formField-container">
                <span className="valid-field">Nickname*</span>
                {!name && !nameVal ? <span className="invalid-field"> (Required Field)</span> : null}
                <div>
                  <input required type="text" className="formField" name="name" maxLength="60" placeholder="Example: jack543!" onChange={this.handleFormChanges} />
                </div>
                For privacy reasons, do not use your full name or email address
              </div>
              <div className="formField-container">
                <span className="valid-field">Email*</span>
                {!email && !emailVal ? <span className="invalid-field"> (Required Field)</span> : null}
                <div>
                  <input required type="email" className="formField" name="email" maxLength="60" placeholder="Example: jack@email.com" onChange={this.handleFormChanges} />
                </div>
                For authentication reasons, you will not be emailed
              </div>
              <div className="qna-answer-image-urls">
                <p>Add urls for your supporting images</p>
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
            <div className="qna-answer-button-container">
              <button className="main-button" type="submit" onClick={(e) => showAddAnswerModal(e)}>Cancel</button>
              <button className="main-button" type="submit" onClick={(e) => this.addAnswer(e)}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
AnswerModal.propTypes = {
  id: propTypes.string.isRequired,
  questionId: propTypes.number.isRequired,
  questionBody: propTypes.string.isRequired,
  showAddAnswerModal: propTypes.func.isRequired,
  showAddedAnswer: propTypes.func.isRequired,
};

export default AnswerModal;
