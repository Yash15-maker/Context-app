import React, { Component } from 'react';
import AuthContext,{ AuthProvider } from './AuthContext';

export default class Auth extends Component {
    render() {
        return (
            <div>
                <h1>Parent component</h1>
                <AuthProvider>
                    <AuthChild/>
                </AuthProvider>
            </div>
        )
    }
}


class AuthChild extends Component {
    static contextType=AuthContext;
    render() {
        const {username,isAuthenticated,login,logout}=this.context;
        return (
            <div>
                <h1>
                    Child Component
                </h1>
                <h2>user: {username}</h2><br/>
                <h2>isAuthenticated: {isAuthenticated?"Authenticated":"UnAuthenticated"}</h2><br/>
              <button onclick={login}></button>
              <button onclick={logout}></button>
            </div>
        )
    }
}
