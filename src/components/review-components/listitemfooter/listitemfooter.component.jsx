import React from 'react';
import propTypes from 'prop-types';

class ListItemFooter extends React.Component {
  constructor(props, { helpfulness }) {
    super(props, { helpfulness });
    this.state = {};
  }

  handleClick = () => {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <span onClick={this.handleClick}> Yes </span>
        <span>{`(${this.props.helpfulness})`}</span>
      </div>
    );
  }
}

export default ListItemFooter;

ListItemFooter.propTypes = {
  helpfulness: propTypes.number.isRequired,
};
