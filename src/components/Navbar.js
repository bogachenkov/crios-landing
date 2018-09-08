import React from 'react';
import Menu from './Menu';
import Container from './Container';
import Logo from './Logo';
import Search from './Search';

const Navbar = () => {
  return (
    <Container>
      <nav className="navbar">
        <Menu />
        <Logo />
        <Search />
      </nav>
    </Container>
  );
};

export default Navbar;