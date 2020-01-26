import React from 'react';
import propTypes from 'prop-types';
import './listitemfooter-styles.scss';

class ListItemFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick = ({ id }) => {
    fetch(`http://3.134.102.30/reviews/helpful/${id}`, {
      method: 'PUT',
    }).then(() => this.setState({ clicked: !this.state.clicked }));
  }

  render() {
    const { helpfulness } = this.props;
    const { clicked } = this.state;
    return (
      <div>
        <span> Helpful? </span>
        <span onClick={this.handleClick} className={ clicked ? "clicked" : "unclicked" }> Yes </span>
        <span>{`(${helpfulness})`}</span>
      </div>
    );
  }
}

export default ListItemFooter;

ListItemFooter.propTypes = {
  helpfulness: propTypes.number.isRequired,
  id: propTypes.number.isRequired,
};
