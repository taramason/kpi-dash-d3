import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './Header.css'

class Header extends Component {
  render () {
    return (
      <React.Fragment>
        <header className="App-header">
          <div>
            <img src={logo} alt=""/>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
