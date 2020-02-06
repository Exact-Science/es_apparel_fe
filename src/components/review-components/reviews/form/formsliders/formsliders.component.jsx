import React from 'react';
import propTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormSlider from './formslider/formslider.component';
import sliderData from './formslider/formsliderbreakdown';
import './formsliders-styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(2) * 2,
  },
  margin: {
    height: theme.spacing(2),
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: '#3f51b5',
    height: 6,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    center: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 3,
  },
  rail: {
    height: 8,
    borderRadius: 3,
  },
})(Slider);


const FormSliders = ({ updateCharacteristics, factors }) => {
  const classes = useStyles();

  return Object.keys(factors).map((el, index) => {
    const marks = [
      {
        value: 1,
        label: sliderData[el][1],
      },
      {
        value: 3,
        label: sliderData[el][3],
      },
      {
        value: 5,
        label: sliderData[el][5],
      },
    ];
    return (
      <div className={classes.root} key={factors[el].id}>
        <h4>{el}</h4>
        <PrettoSlider
          name={el}
          value={0}
          valueLabelDisplay="off"
          onChange={updateCharacteristics}
          step={1}
          style={{ margin: 8 }}
          marks={marks}
          min={1}
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
