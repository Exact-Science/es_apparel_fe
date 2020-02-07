/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import propTypes from 'prop-types';
import './qna-search.styles.scss';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

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
          <TextField
            className="qna-searchBox"
            type="search"
            name="searchTerm"
            variant="outlined"
            multiline
            label="HAVE A QUESTION? SEARCH FOR ANSWERS... "
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => searchQuestions(e)}
          />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  searchQuestions: propTypes.func.isRequired,
};

export default Search;
