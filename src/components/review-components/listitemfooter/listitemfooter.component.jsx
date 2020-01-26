import React from 'react';
import propTypes from 'prop-types';
import './listitemfooter-styles.scss';

class ListItemFooter extends React.Component {
  constructor(props) {
    super(props);
    const { helpfulness } = this.props;
    this.state = {
      clicked: false,
      helpfulness,
    };
  }

  handleClick = () => {
    const { id } = this.props;
    const { clicked, helpfulness } = this.state;
    fetch(`http://3.134.102.30/reviews/helpful/${id}`, {
      method: 'PUT',
    })
    .then(() => this.setState({ clicked: !clicked, helpfulness }));
  }

  render() {
    const { clicked, helpfulness } = this.state;
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
