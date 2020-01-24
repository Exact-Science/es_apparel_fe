import React from 'react';
import './qna.styles.scss';

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    const { id } = this.state;
    fetch(`http://3.134.102.30/qa/${id}`)
      .then((results) => { return results.json(); })
      .then((list) => { this.setState({ list: list.results }); })
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        QnA
        { list.map((q) => { return <div>{q.question_body}</div> }) }
      </div>
    );
  }
}


export default QnA;
