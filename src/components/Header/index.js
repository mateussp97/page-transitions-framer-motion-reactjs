import React from "react";
import {
  Navbar,
  NavbarWrapper,
  Logo,
  NavbarLinks,
  NavbarLink,
} from "./HeaderElements";

const Header = () => {
  return (
    <Navbar>
      <NavbarWrapper>
        <Logo to="/">Animal</Logo>
        <NavbarLinks>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/services">Services</NavbarLink>
        </NavbarLinks>
      </NavbarWrapper>
    </Navbar>
  );
};

export default Header;
