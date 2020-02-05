import React from 'react';
import propTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';

const FormSlider = ({ characteristics, title, id }) => {
  return (
    <div>
      <h6>{title}</h6>
      <Slider
        defaultValue={0}
        aria-labelledby={id}
        valueLabelDisplay="auto"
        step={1}
        characteristics
        min={1}
        max={5}
      />
    </div>
  );
};

export default FormSlider;

FormSlider.propTypes = {

};
