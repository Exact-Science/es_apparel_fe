import React from 'react';
import './qna.styles.scss';
import QnAList from '../qna-List/qna-List.component.jsx';

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    // const id = this.props;
    fetch(`http://3.134.102.30/qa/${this.props.id}`)
      .then((results) => { return results.json(); })
      .then((list) => { this.setState({ list: list.results }); });
      // .then((results) => {console.log(this.state.list)});
  }

  render() {
    const { list } = this.state;
    // console.log(list)
    return (
      <div>
        QnA
        { list.map((q) => { return <QnAList question_body={q.question_body} />; }) }
      </div>
    );
  }
}


export default QnA;
