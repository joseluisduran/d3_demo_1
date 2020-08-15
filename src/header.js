import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

// Menú principal del Navbar
class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Switch>
              <Route exact path="/">
                <li className="nav-item active">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </Route>
              <Route exact path="/login">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
              </Route>
              <Route path="/dashboard">
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/" >Logout</Link>
                </li>
              </Route>
            </Switch>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;