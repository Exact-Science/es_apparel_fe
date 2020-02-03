import React from 'react';
import propTypes from 'prop-types';
import FactorItem from './factoritem/factoritem.component';
import './factors-styles.scss';

const Factors = ({ factors }) => (
  Object.keys(factors).map((el) => {
    const { value, id } = factors[el];
    return <FactorItem value={value} key={id} name={el} />;
  })
);

export default Factors;

Factors.propTypes = {
  factors: propTypes.shape({}).isRequired,
};
