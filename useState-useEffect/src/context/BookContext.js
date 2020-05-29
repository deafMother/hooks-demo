import React, { createContext, useState } from "react";

/* 
        creating context using function component and hooks
*/
export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "first of the achievement", id: 1 },
    { title: "the goal consumed", id: 2 },
    { title: "unprecendented growth", id: 3 },
    { title: "super success", id: 4 }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
