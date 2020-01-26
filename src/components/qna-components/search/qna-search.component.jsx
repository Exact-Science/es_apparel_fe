import React from 'react';
import './qna-search.styles.scss';
// import propTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  render() {
    return (
      <div className="qna-search">
        <form>
          <input className="qna-searchBox" type="text" name="name" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS...  " />
        </form>
      </div>
    );
  }
}

export default Search;
