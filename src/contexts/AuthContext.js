import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProviver extends Component {
  state = { isAuthenticated: false };

  toggleAuth = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProviver;