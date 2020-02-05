import React from 'react';
import propTypes from 'prop-types';
import FormSlider from './formslider/formslider.component';
import sliderData from './formslider/formsliderbreakdown';

const FormSliders = ({ handleInputChange }) => {
  return Object.keys(sliderData).map((el, index) => {
    return (
      <FormSlider
        characteristics={sliderData[el]}
        title={el}
        key={index + 10}
        id={index}
        handleInputChange={handleInputChange}
      />
    );
  });
};

export default FormSliders;

FormSliders.propTypes = {
  handleInputChange: propTypes.func.isRequired,
};
