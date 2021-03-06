import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';


class SearchContainer extends Component {

  handleSearch = event => {
    // passes search results back to App.js as 'username'
    event.preventDefault()
    let username = event.currentTarget[0].value
    this.props.handleSearch(username)
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSearch}/>
      </div>
    )
  }
}

export default SearchContainer;
