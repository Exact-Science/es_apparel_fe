import React from 'react';
import propTypes from 'prop-types';
import './qna-utility.styles.scss';

class Utility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionHelpfulness: 0,
    };
  }

  componentDidMount() {
    const { questionHelpfulness } = this.props;
    this.setState({ questionHelpfulness });
  }

  // updateHelpful()

  render() {
    const { questionHelpfulness } = this.state;
    return (
      <div>
        <span>
          Helpful?
          <button type="submit">yes</button>
          {questionHelpfulness}
        </span>
      </div>
    )
  }
}


Utility.propTypes = {
  // questionId: propTypes.number.isRequired,
  questionHelpfulness: propTypes.number.isRequired,
};

export default Utility;
