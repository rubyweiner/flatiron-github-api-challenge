import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import './App.css';
import { Grid, Segment, Header, Image } from 'semantic-ui-react';


class App extends Component {

  state = {
    userData: null
  }


  fetchUserData = (username) => {
    // fetches available userData from GitHub API based on user input 'username'
    // stores response to state

    fetch (`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(json => {
      this.setState({userData: json})
      console.log(this.state.userData)
    })
  }

  render() {
    // always renders SearchContainer (which contains SearchBar)
    // conditionally renders SearchResultsContainer when state for UserData != null

    return (
      <div className="body">
        <Grid columns='equal'>
          <Grid.Column width={5}>
            <Segment >
              <Header as="h3" textAlign="center">Search GitHub Username:</Header>
              <SearchContainer handleSearch={this.fetchUserData}/>
            </Segment>
          </Grid.Column>

          {this.state.userData === null ?
            null
          :
            <Grid.Column width={4}>
              <Segment padded>
                <Header as="h3">{this.state.userData.name}</Header>
                <Image src={this.state.userData.avatar_url} size='small' />
                <SearchResultsContainer userData={this.state.userData}/>
              </Segment>
            </Grid.Column>
          }
        </Grid>
      </div>
    );
  }
}

export default App;
