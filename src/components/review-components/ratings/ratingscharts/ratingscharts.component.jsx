import React from 'react';
import propTypes from 'prop-types';
import './ratingscharts-styles.scss';

const RatingsCharts = ({ handleClick }) => {
  return (
    <div className="ratingschart-container">
      <div className="ratingschart-bar">
        <a onClick={handleClick} data-rank="5"> 5 stars </a>
        <div>
          <span>Spanny bar here</span>
        </div>
        <span>6</span>
      </div>
    </div>
  );
};

export default RatingsCharts;

RatingsCharts.propTypes = {

};
