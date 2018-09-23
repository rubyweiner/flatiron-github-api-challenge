import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SearchBar from '../components/SearchBar';


class SearchContainer extends Component {

  handleSearch = event => {
    event.preventDefault()
    let username = event.currentTarget[0].value
    this.props.handleSearch(username)
  }

  render() {
    return (
      <Container>
        <SearchBar onSubmit={this.handleSearch}/>
      </Container>
    )
  }
}

export default SearchContainer;
