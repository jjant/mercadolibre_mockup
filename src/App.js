import React, { Component } from 'react';
import logo from './logo.svg';
import SearchBar from './search/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;