import React, { useState, createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { name: 'SEO', id: 1 },
    { name: 'React', id: 2 },
    { name: 'Redux', id: 3 }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
