import React from 'react';
import propTypes from 'prop-types';

import Select from '@bit/nexxtway.react-rainbow.select';

import './dropdown-button.styles.scss';

class DropDownButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { styles, currentStyleIdx } = this.props;

    const containerStyles = {
      width: 200,
    };
    const options = [];

    return (
      <div className="tester">
        <Select
          label="Size"
          options={options}
          onChange={this.handleChange}
          style={containerStyles}
        />
        <Select
          label="Quantity"
          options={options}
          style={containerStyles}
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
