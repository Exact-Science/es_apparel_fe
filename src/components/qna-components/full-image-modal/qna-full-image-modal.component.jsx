import React from 'react';
import propTypes from 'prop-types';
import './qna-full-image-modal.styles.scss';

class FullImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // componentDidMount() {
  //   const { id } = this.props;
  //   fetch(`http://3.134.102.30/products/${id}`)
  //     .then((results) => results.json())
  //     .then((data) => this.setState({ name: data.name }));
  // }

  // addAnswer = (e) => {
  //   e.persist();
  //   e.preventDefault();
  //   const { questionId, showAddAnswerModal } = this.props;
  //   const form = document.querySelector('.qna-new-answer-form');
  //   const formData = new FormData(form);
  //   const data = {};
  //   const imageUrls = [];

  //   for (const pair of formData.entries()) {
  //     if (pair[0].substr(0, 3) === 'url' && pair[1]) {
  //       imageUrls.push(pair[1])
  //     } else if (pair[0].substr(0, 3) !== 'url') {
  //       data[pair[0]] = pair[1];
  //     }
  //   }

  //   data.photos = imageUrls;

  //   fetch(`http://3.134.102.30/qa/${questionId}/answers`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(() => showAddAnswerModal(e));
  // }

  render() {
    const { questionBody, showAddAnswerModal } = this.props;
    const { name } = this.state;
    return (
      <div className="qna-full-image-modal-container">
        <div className="qna-full-image-modal-content">

        </div>
      </div>
    );
  }
}
FullImageModal.propTypes = {
  // id: propTypes.string.isRequired,
  // questionId: propTypes.number.isRequired,
  // questionBody: propTypes.string.isRequired,
  // showAddAnswerModal: propTypes.func.isRequired,
};

export default FullImageModal;
