import React, { Component } from "react";
import AuthContext from "./AuthContext";

export default class Child extends Component {
  static contextType = AuthContext;

  render() {
    const {
      username,
      isAuthenticated,
      login,
      logout,
      togglein,
      toggleout,
      mode,
      toggle,
    } = this.context;
    return (
      <div>
        <h1>Child Component</h1>
        <br />
        <h2>user: {username}</h2>
        <br />
       
        <h2>
          isAuthenticated:{" "}
          {isAuthenticated ? "Authenticated" : "UnAuthenticated"}
        </h2>

        <br />

        <h2>mode: {mode}</h2>
        <br />
        <h2>
          toggle:{" "}
          {toggle ? "DarkMode" : "LightMode"}
        </h2>
        <button onClick={login}>Log In</button>
        <button onClick={logout}>Log Out</button>
        <br />
        <button onClick={togglein}>Tog In</button>
        <button onClick={toggleout}>Tog Out</button>
      </div>
    );
  }
}
