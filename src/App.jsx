import React from 'react';
import './App.scss';
import Overview from './components/overview-components/overview/overview.component';
import QnA from './components/qna-components/qna/qna.component';
import Review from './components/review-components/review/review.component';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
    };
  }

  render() {
    const { productId } = this.state;
    return (
      <div className="App">
        <Overview id={productId} />
        <QnA id={productId} />
        <Review id={productId} />
      </div>
    );
  }
}

export default App;