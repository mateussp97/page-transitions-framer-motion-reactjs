import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  height: 60px;
  width: 100%;
  background: transparent;
`;

export const NavbarWrapper = styled.nav`
  max-width: 1100px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
`;

export const Logo = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavbarLinks = styled.div``;

export const NavbarLink = styled(Link)`
  color: #fff;
  margin-right: 1rem;

  &:nth-child(3) {
    margin-right: 0;
  }
`;
