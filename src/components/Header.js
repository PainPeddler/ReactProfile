import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Navigation />
      </nav>
      <div className="header-name">John Metzger</div>
    </header>
  );
};

export default Header;




  