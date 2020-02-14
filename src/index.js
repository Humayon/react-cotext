import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProviver from './contexts/AuthContext';

ReactDOM.render(
  <ThemeContextProvider>
    <AuthContextProviver>
      <App />
    </AuthContextProviver>
  </ThemeContextProvider>,
  document.getElementById('root')
);
