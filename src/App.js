import React, { Component } from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeToggle from './components/ThemeToggle';
import BookContextProvider from './contexts/BookContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
        <ThemeToggle />
      </div>
    );
  }
}

export default App;
