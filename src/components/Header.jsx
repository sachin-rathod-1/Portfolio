import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../data/navLinks';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(15, 32, 39, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: #4fc3f7;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #29b6f6;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    height: 100vh;
    background: #0f2027;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }
`;

const NavLink = styled.li`
  list-style: none;
`;

const LinkItem = styled.a`
  color: white;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #4fc3f7;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer style={{ background: scrolled ? 'rgba(15, 32, 39, 0.95)' : 'rgba(15, 32, 39, 0.9)' }}>
      <Nav>
        <Logo href="#">Sachin</Logo>

        <NavLinks isOpen={isOpen}>
          {navLinks.map((link) => (
            <NavLink key={link.id}>
              <LinkItem 
                href={link.url}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </LinkItem>
            </NavLink>
          ))}
        </NavLinks>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;