import React from 'react';
import propTypes from 'prop-types';
import FactorItem from './factoritem/factoritem.component';
import './factors-styles.scss';

const Factors = ({ factors }) => {
console.log(factors);
  return (
    <div className="factors-container">
      <>
        <FactorItem />
      </>
    </div>
  );
};

export default Factors;

Factors.propTypes = {
  factors: propTypes.shape({}).isRequired,
};
