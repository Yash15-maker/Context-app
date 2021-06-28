import React from "react";

const AuthContext = React.createContext();
//Consumig Multiple Context
// const ModeContext=React.createContext();

export class AuthProvider extends React.Component {
  state = {
    username: " ",
    isAuthenticated: false,
    mode: "light",
    toggle: false
  };
  login = () => {
    this.setState({ username: "Bob", isAuthenticated: true });
  };
  logout = () => {
    this.setState({ username: " ", isAuthenticated: false });
  };
  togglein = () => {
    this.setState({mode: "dark", toggle: true });
  };
  toggleout = () => {
    this.setState({mode: "light", toggle: false });
  };
  render() {
    const { username, isAuthenticated,mode,toggle } = this.state;
    const { login, logout,togglein,toggleout } = this;
    return (
      <AuthContext.Provider
        value={{ username, isAuthenticated, login, logout,toggleout,togglein,mode,toggle }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContext;



