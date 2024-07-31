import React, { useState } from 'react';
import { Nav, Logo, Menu, MenuItem, SubCategories, SubCategoryItem, Contact, Icons, Weather, StyledLink, MenuButton, Overlay } from './styled';
import { subCategories, navItems } from '../utils';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Overlay open={menuOpen} />
      <Nav open={menuOpen}>
        <Logo>
          <img src="./Logo.png" alt="Keng Makon" />
        </Logo>
        <MenuButton onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </MenuButton>
        <Menu open={menuOpen}>
          {navItems.map((item, index) => (
            <MenuItem key={index}>
              <StyledLink to={item.path}>{item.title}</StyledLink>
              {item.title === 'Категории' && (
                <SubCategories className="subcategory">
                  {subCategories.map((subItem, subIndex) => (
                    <SubCategoryItem key={subIndex}>{subItem}</SubCategoryItem>
                  ))}
                </SubCategories>
              )}
            </MenuItem>
          ))}
        </Menu>
        <Contact>
          <p>+998(98) 300-36-76</p>
          <a href="tel:+998983003676">
            <button>Заказать звонок</button>
          </a>
        </Contact>
        <Icons>
          <i className="shopping-cart-icon"></i>
          <i className="user-icon"></i>
        </Icons>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navbar;
