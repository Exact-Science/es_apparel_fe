/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import Overview from './components/overview-components/overview/overview.component';
import QnA from './components/qna-components/qna/qna.component';
import Review from './components/review-components/app/review.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    this.state = {
      productId: location.pathname.substr(1) || '5',
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

export default withRouter(App);
