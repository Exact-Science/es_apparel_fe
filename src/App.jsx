/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import Overview from './components/overview-components/overview/overview.component';
import RelatedProducts from './components/related-products-components/related-products/related-products.component';
import QnA from './components/qna-components/qna/qna.component';
import Reviews from './components/review-components/reviews/reviews.component';

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
        {/* <Overview id={productId} />
        <RelatedProducts id={productId} />
        <QnA id={productId} /> */}
        <Reviews id={productId} />
      </div>
    );
  }
}

export default withRouter(App);
