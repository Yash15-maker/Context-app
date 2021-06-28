import "./App.css";
import React, { Component } from "react";
import  { AuthProvider } from "./AuthContext";

import Child from "./Child";

export default class App extends Component {
  render() {
    return (
      <center >
        <h1 >Parent component</h1>
        <AuthProvider>
        
          <Child />
   
        </AuthProvider>
        

      </center>
    );
  }
}




