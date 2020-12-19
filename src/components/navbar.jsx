import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="main-nav">
        <i className="navbar-logo fas fa-leaf"></i>
        <h1>habit traker </h1>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;