import React from 'react';
import propTypes from 'prop-types';

import StyleItem from '../style-item/style-item.component';

import './styles-container.styles.scss';

const StylesContainer = ({ styles }) => (
  <div className="styles-container">
    {styles.map((style) => (
      <StyleItem
        key={`si${style.photos[0].thumbnail_url}`}
        image={style.photos[0].thumbnail_url}
      />
    ))}
  </div>
);

export default StylesContainer;

StylesContainer.propTypes = {
  styles: propTypes.arrayOf(propTypes.object).isRequired,
};
