import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from './header';
import Login from './login';
import Home from './home';
import Dashboard from './dashboard';

//Ruteador de módulos
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
