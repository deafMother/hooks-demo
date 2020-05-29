import React, { Component, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BookContext";

// using the classical way to consume context
// export class BookList extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         style={{ background: theme.bg, color: theme.syntax }}
//         className="book-list"
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>some thrown rocks</li>
//           <li style={{ background: theme.ui }}>tree of fire</li>
//           <li style={{ background: theme.ui }}>blade and rice</li>
//         </ul>
//       </div>
//     );
//   }
// }

// use context implementation
const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  console.log(books);
  return (
    <div
      style={{ background: theme.bg, color: theme.syntax }}
      className="book-list"
    >
      <ul>
        {books.map(book => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
