import React from 'react';
import propTypes from 'prop-types';

import Select from '@bit/nexxtway.react-rainbow.select';

import './dropdown-button.styles.scss';

class DropDownButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSize: 'Select a size',
    };
  }

  handleChange = (e) => {
    this.setState({ currentSize: e.target.value });
  }

  createSizes = () => {
    const { styles, currentStyleIdx } = this.props;

    const sizes = [{
      value: 'Select a size',
      label: 'Select a size',
    }];

    Object.keys(styles[currentStyleIdx].skus).map((size) => (
      sizes.push({
        value: size,
        label: size,
      })
    ));

    return sizes;
  }

  createQuantity = () => {
    const { styles, currentStyleIdx } = this.props;
    const { currentSize } = this.state;

    const quantity = [];

    for (let i = 1; i < styles[currentStyleIdx].skus[currentSize]; i += 1) {
      if (i > 7) break;
      quantity.push({
        value: i,
        label: i,
      });
    }

    return quantity;
  }

  render() {
    const { currentSize } = this.state;

    const sizeStyles = {
      width: 200,
      padding: 10,
    };

    const quantityStyles = {
      width: 100,
      padding: 10,
    };

    return (
      <div className="size-quantity-container">
        <Select
          options={this.createSizes()}
          onChange={this.handleChange}
          style={sizeStyles}
          className="selector"
        />
        <Select
          options={this.createQuantity()}
          style={quantityStyles}
          disabled={currentSize === 'Select a size'}
          className="selector"
        />
      </div>
    );
  }
}

export default DropDownButton;

DropDownButton.propTypes = {
  styles: propTypes.arrayOf(propTypes.object).isRequired,
  currentStyleIdx: propTypes.number.isRequired,
};
