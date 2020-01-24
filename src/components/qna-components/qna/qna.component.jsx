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
    fetch(`http://3.134.102.30/qa/${this.props.id}`)
      .then((results) => { return results.json(); })
      .then((list) => { this.setState({ list: list.results }); })
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        QnA
        {/* <div>{ list[0].question_id }</div> */}
        { list.map((q) => { return <div>{q.question_body}</div> }) }
        {/* {console.log(list)} */}
      </div>
    );
  }
}


export default QnA;
