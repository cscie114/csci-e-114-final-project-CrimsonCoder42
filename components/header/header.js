import React, { useState } from 'react';
import NextLink from 'next/link';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <NextLink href="/" className="logo">
        TrailWeather
      </NextLink>
      <button className="toggle" onClick={toggleMenu}>
        <span className="toggle-icon"></span>
      </button>
      <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
        <li>
          <NextLink href="/" className="nav-link">
            Home
          </NextLink>
        </li>
        <li>
          <NextLink href="/about-us" className="nav-link">
            About
          </NextLink>
        </li>
        <li>
          <NextLink href="/contact" className="nav-link">
            Contact
          </NextLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

