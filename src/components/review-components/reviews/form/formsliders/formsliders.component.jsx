import React from 'react';
import propTypes from 'prop-types';
import FormSlider from './formslider/formslider.component';
import sliderData from './formslider/formsliderbreakdown';

const FormSliders = () => {
  return Object.keys(sliderData).map((el, index) => {
    return <FormSlider characteristics={sliderData[el]} title={el} id={index + 1} key={index} />;
  });
};

export default FormSliders;

FormSliders.propTypes = {

};
