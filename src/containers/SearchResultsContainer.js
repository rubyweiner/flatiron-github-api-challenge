import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';


class SearchResultsContainer extends Component {

  handleSearch = event => {
    event.preventDefault()
    let username = event.currentTarget[0].value
    this.props.handleSearch(username)
  }

  render() {
    return (
      <List>
        <List.Item>{this.props.userData.public_repos} public repos</List.Item>
        <List.Item
          icon='users'
          content={<a href={this.props.userData.html_url}>{this.props.userData.login}</a>}
        />
        <List.Item
          icon='mail'
          content={this.props.userData.email ? <a href={this.props.userData.email}>this.props.userData.email</a> : "email - N/A"}
        />
        <List.Item icon='briefcase' content={this.props.userData.company ? this.props.userData.company : "company - N/A"} />
        <List.Item icon='pencil alternate' content={this.props.userData.bio ? this.props.userData.bio : "bio - N/A"}/>
      </List>
    )
  }
}

export default SearchResultsContainer;
