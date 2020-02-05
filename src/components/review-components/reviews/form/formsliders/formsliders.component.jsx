import React from 'react';
import propTypes from 'prop-types';
import FormSlider from './formslider/formslider.component';
import sliderData from './formslider/formsliderbreakdown';

const FormSliders = ({ handleInputChange, factors }) => {
  return Object.keys(factors).map((el, index) => {
    return (
      <FormSlider
        characteristics={sliderData[el]}
        title={el}
        key={index}
        id={factors[el].id}
        handleInputChange={handleInputChange}
      />
    );
  });
};

export default FormSliders;

FormSliders.propTypes = {
  handleInputChange: propTypes.func.isRequired,
};
