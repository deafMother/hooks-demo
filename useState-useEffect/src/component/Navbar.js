import React, { Component, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

// class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {authContext => {
//           return (
//             <ThemeContext.Consumer>
//               {context => {
//                 const { isAUthenticated, toggleAuth } = authContext;
//                 const { isLightTheme, light, dark } = context;
//                 const theme = isLightTheme ? light : dark;
//                 return (
//                   <nav style={{ background: theme.ui, color: theme.syntax }}>
//                     <h1>Context App</h1>
//                     <div onClick={toggleAuth}>
//                       {isAUthenticated ? "Logged in" : "Logged Out"}
//                     </div>

//                     <ul>
//                       <li>Home</li>
//                       <li>About</li>
//                       <li>Contact</li>
//                     </ul>
//                   </nav>
//                 );
//               }}
//             </ThemeContext.Consumer>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }

// consuming multiple context
const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAUthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAUthenticated ? "Logged in" : "Logged Out"}
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
