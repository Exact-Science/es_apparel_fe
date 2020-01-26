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

  handleClick = async () => {
    const { id } = this.props;
    const { clicked, helpfulness } = this.state;
    this.setState({ helpfulness: helpfulness + 1 });
    try {
      await fetch(`http://3.134.102.30/reviews/helpful/${id}`, {
        method: 'PUT',
      });
      this.setState({ clicked: !clicked });
    } catch {
      this.setState({ helpfulness: helpfulness - 1 });
    }
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
