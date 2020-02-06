import React from 'react';
import propTypes from 'prop-types';


const FormSlider = ({
  characteristics, title, id, handleInputChange,
}) => {
  const keys = Object.keys(characteristics);
  return (
    <div className="form-input">
      <h4>{title}</h4>
      {keys.map((el, index) => (
        <label htmlFor={characteristics[el]} key={index}>
          {characteristics[el]}
          <input
            type="radio"
            name={id}
            onChange={handleInputChange}
            value={index + 1}
          />
        </label>
      ))}
    </div>
  );
};

export default FormSlider;

FormSlider.propTypes = {
  characteristics: propTypes.shape({}).isRequired,
  title: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  handleInputChange: propTypes.func.isRequired,
};
