import React, { createContext, useState } from "react";

export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Name of the Wind", id: 1 },
    { title: "The Final Empire", id: 2 },
    { title: "The Long Earth", id: 3 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
