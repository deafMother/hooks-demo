import React, { Component, createContext } from "react";
export const AuthContext = createContext();

export class AuthContextProvider extends Component {
  state = {
    isAUthenticated: false
  };
  toggleAuth = () => {
    this.setState({ isAUthenticated: !this.state.isAUthenticated });
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

export default AuthContextProvider;
