import React from 'react'
import { Login, Logo, NavBarStyled, NavigationLinks } from "./styles/NavBar"
const NavBar = () => {
  return (
    
    <NavBarStyled>
        <Logo>IDD Life</Logo>
        <NavigationLinks>
          <li>About</li>
          <li>System Navigation Tool</li>
          <li>Online Resource Guide</li>
          <li>Blog</li>
        </NavigationLinks>
        <Login>Login</Login>
      </NavBarStyled>
  )
}

export default NavBar