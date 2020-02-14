import React, { Component } from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeToggle from './components/ThemeToggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BookList />
        <ThemeToggle />
      </div>
    );
  }
}

export default App;
