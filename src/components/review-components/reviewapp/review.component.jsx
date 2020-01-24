import React from 'react';
import './review.styles.scss';
// import ReviewList from './components/review-components/reviewlist/ReviewList-component';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: {},
    };
  }

  componentDidMount() {
    const { id } = this.props;

    fetch(`http://3.134.102.30/reviews/${id}/list`)
      .then((data) => data.json())
      .then((results) => this.setState({ reviews: results }))
      .catch((err) => err);
  }

  render() {
    return (
      <div>
        <p>Hi, reviews container will go here</p>
      </div>
    );
  }
}
export default Review;
