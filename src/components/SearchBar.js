import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react'



class SearchBar extends Component {
  render() {
    return (
      <Form onSubmit={(event) => {this.props.onSubmit(event)}}>
        <Form.Field width={4}>
          <Header as="h2">Search by GitHub Username:</Header>
          <input placeholder='username' />
        </Form.Field>
        <Button type='submit'>Search</Button>
      </Form>
    )
  }
}

export default SearchBar;
