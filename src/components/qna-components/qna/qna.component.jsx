import React from 'react';
import './qna.styles.scss';
import QnAList from '../qna-List/qna-List.component.jsx';
import propTypes from 'prop-types';


class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }


  componentDidMount() {
    const { id } = this.props;
    console.log()
    fetch(`http://3.134.102.30/qa/${id}`)
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
        { list.map((q) => <QnAList question_body={q.question_body} />) }
      </div>
    );
  }
}

QnA.propTypes = {
  id: propTypes.string.isRequired,
};

export default QnA;
