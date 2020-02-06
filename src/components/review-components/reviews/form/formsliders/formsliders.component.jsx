import React from 'react';
import propTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import FormSlider from './formslider/formslider.component';
import sliderData from './formslider/formsliderbreakdown';
import './formsliders-styles.scss';

const FormSliders = ({ handleInputChange, factors }) => {
  return Object.keys(factors).map((el, index) => {
    return (
      <div className="form-sliders">
        <h3>{el}</h3>
        <Slider
          defaultValue={0}
          // getAriaValueText={index + 1}
          valueLabelDisplay="auto"
          onChange={handleInputChange}
          step={1}
          style={{ margin: 8 }}
          marks
          min={0}
          max={5}
        />
      </div>
      // <FormSlider
      //   characteristics={sliderData[el]}
      //   title={el}
      //   key={index}
      //   id={factors[el].id}
      //   handleInputChange={handleInputChange}
      // />
    );
  });
};

export default FormSliders;

FormSliders.propTypes = {
  handleInputChange: propTypes.func.isRequired,
};
