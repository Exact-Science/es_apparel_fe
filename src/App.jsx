import React from 'react';
import './App.css';
import Overview from './components/overview-components/overview/overview.component.jsx';
import QnA from './components/qna-components/qna/qna.component.jsx';
import Review from './components/review-components/review/review.component.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
    }
  }
  render() {
    return (
      <div className="App">
        <Overview />
        <QnA />
        <Review />
      </div>
    );
  }
}

export default App;
