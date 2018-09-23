import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';


class SearchResultsContainer extends Component {

  handleSearch = event => {
    event.preventDefault()
    let username = event.currentTarget[0].value
    this.props.handleSearch(username)
  }

  render() {
    return (
      <Container>
        Search Results!!!!!!!!!!!
      </Container>
    )
  }
}

export default SearchResultsContainer;
