import React from 'react';
import bg from '../images/Header.jpg';

const Header = () => {
  return (
    <header className="header" style={{backgroundImage: `url(${bg})`}}>
      <h1 className="header__title">Simple PSD template with cool stuff</h1>
      <p className="header__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a className="button header__btn">Explore Template</a>
    </header>
  );
};

export default Header;