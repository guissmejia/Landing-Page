import React from 'react';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Shots</a>
          </li>
          <li>
            <a href="/">Profile</a>
          </li>
        </ul>
      </nav>
      <section className="header__user">
        <h3>Username</h3>
      </section>
    </header>
  );
};

export default Header;
