import React from 'react';
import propTypes from 'prop-types';
import './qna-search.styles.scss';
// import propTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { searchQuestions } = this.props;
    return (
      <div className="qna-search">
        <form>
          <input className="qna-searchBox" type="text" name="searchTerm" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS...  " onChange={(e) => searchQuestions(e)} />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  searchQuestions: propTypes.func.isRequired,
};

export default Search;
