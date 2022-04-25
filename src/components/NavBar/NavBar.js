import React, { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from './NavBarStyles';
import { navbarData } from '../../data/NavBarData';

function NavBar() {
  const [show, setShow] = useState(false);
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const closeMobilmenu = (id) => {
    scrollTo(id);
    setShow(false);
  };
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src="./images/logo.svg" alt="logo" />
          </NavLogo>

          <MobileIcon onClick={() => setShow(!show)}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {navbarData.map((el, index) => (
              <NavItem key={index}>
                <NavLinks to="/" onClick={() => closeMobilmenu(el.to)}>
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default NavBar;
