import React from 'react';
import propTypes from 'prop-types';
import './ratingscharts-styles.scss';

const RatingsCharts = ({ getFilterValue }) => {
  return (
    <div className="ratingschart-container">
      <div className="ratingschart-bar">
        <button onClick={getFilterValue} value="5"> 5 stars</button>
        <span className="ratingschart-span"></span>
      </div>
      <div className="ratingschart-bar">
        <button onClick={getFilterValue} value="4"> 4 stars</button>
        <span className="ratingschart-span"></span>
      </div>
      <div className="ratingschart-bar">
        <button onClick={getFilterValue} value="3"> 3 stars</button>
        <span className="ratingschart-span"></span>
      </div>
      <div className="ratingschart-bar">
        <button onClick={getFilterValue} value="2"> 2 stars</button>
        <span className="ratingschart-span"></span>
      </div>
      <div className="ratingschart-bar">
        <button onClick={getFilterValue} value="1"> 1 stars</button>
        <span className="ratingschart-span"></span>
      </div>
    </div>
  );
};

export default RatingsCharts;

RatingsCharts.propTypes = {
  getFilterValue: propTypes.func.isRequired,
};
