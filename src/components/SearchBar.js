import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'



class SearchBar extends Component {
  render() {
    return (
      <Form onSubmit={(event) => {this.props.onSubmit(event)}}>
        <Form.Field >
          <input placeholder='username' />
        </Form.Field>
        <Button type='submit'>Search</Button>
      </Form>
    )
  }
}

export default SearchBar;
