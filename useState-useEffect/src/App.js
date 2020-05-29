import React, { Component } from "react";
import Navbar from "./component/Navbar";
import BookList from "./component/BookList";
import ThemeToggle from "./component/ThemeToggle";
import ThemeContextProvider from "./context/ThemeContext";
import AuthContextProvider from "./context/AuthContext";
import BookListProvider from "./context/BookContext";

function App(params) {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookListProvider>
            <BookList />
          </BookListProvider>
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
