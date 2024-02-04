import React from 'react';
import logo from '../assets/header.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" height='100px' className="logo" />
      <span className="title">LifeLine</span>
    </div>
  );
};

export default Header;
