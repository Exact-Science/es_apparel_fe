import React from 'react';
import propTypes from 'prop-types';

import DropDownButton from '../dropdown-button/dropdown-button.component';

import './checkout-container.styles.scss';

class CheckoutContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { styles, currentStyleIdx } = this.props;

    return (
      <div className="checkout-container">
        <DropDownButton
          styles={styles}
          currentStyleIdx={currentStyleIdx}
        />
      </div>
    );
  }
}

export default CheckoutContainer;

CheckoutContainer.propTypes = {
  styles: propTypes.arrayOf(propTypes.object).isRequired,
  currentStyleIdx: propTypes.number.isRequired,
};
