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

    const quantity = [{
      value: 'Select a quantity',
      label: 'Select a quantity',
    }];

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

    const containerStyles = {
      width: 200,
      padding: '10px',
    };

    return (
      <div className="size-quantity-container">
        <Select
          label="Size"
          options={this.createSizes()}
          onChange={this.handleChange}
          style={containerStyles}
        />
        <Select
          label="Quantity"
          options={this.createQuantity()}
          style={containerStyles}
          disabled={currentSize === 'Select a size'}
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
