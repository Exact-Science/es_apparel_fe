import React from 'react';
import propTypes from 'prop-types';

import StyleItem from '../style-item/style-item.component';
import StyleInfo from '../style-info/style-info.component';

import './styles-container.styles.scss';

const StylesContainer = ({ styles, changeMainImage, currentStyle }) => (
  <>
    <div className="style-utils">
      <StyleInfo
        currentStyle={currentStyle}
      />
    </div>
    <div className="styles-container">
      {styles.map((style, idx) => (
        <StyleItem
          key={`si${style.photos[0].thumbnail_url}`}
          idx={idx}
          changeMainImage={changeMainImage}
          image={style.photos[0].thumbnail_url}
        />
      ))}
    </div>
  </>
);

export default StylesContainer;

StylesContainer.propTypes = {
  styles: propTypes.arrayOf(propTypes.object).isRequired,
  changeMainImage: propTypes.func.isRequired,
  currentStyle: propTypes.string.isRequired,
};
