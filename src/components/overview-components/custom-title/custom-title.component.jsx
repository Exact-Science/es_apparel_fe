import React from 'react';
import propTypes from 'prop-types';

import './custom-title.styles.scss';

const CustomTitle = ({ title }) => (
  <h1>{title}</h1>
);

export default CustomTitle;

CustomTitle.propTypes = {
  title: propTypes.string.isRequired,
};
