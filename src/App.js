import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import './App.css';


class App extends Component {

  state = {
    userData: null
  }

  fetchUserData = (username) => {
    fetch (`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(json => {
      this.setState({userData: json})
    })
  }

  render() {
    return (
      <div>
        <SearchContainer handleSearch={this.fetchUserData}/>
        {this.state.userData === null ?
          null
        :
          <SearchResultsContainer />
        }
      </div>
    );
  }
}

export default App;
