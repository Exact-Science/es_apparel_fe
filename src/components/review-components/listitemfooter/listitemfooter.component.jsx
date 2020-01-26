import React from 'react';
import propTypes from 'prop-types';

class ListItemFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick = (reviewid) => {
    fetch(`http://3.134.102.30/reviews/helpful/${reviewid}`, {
      method: 'PUT',
    }).then(() => console.log('clicked'));
  }

  render() {
    const { helpfulness, id } = this.props;
    return (
      <div>
        <span onClick={this.handleClick(id)}> Yes </span>
        <span>{helpfulness}</span>
      </div>
    );
  }
}

export default ListItemFooter;

ListItemFooter.propTypes = {
  helpfulness: propTypes.number.isRequired,
  id: propTypes.number.isRequired,
};
