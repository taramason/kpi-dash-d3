import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './Header.css'

class Header extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logo} alt=""/>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
