import React from "react"
import { Link } from "react-router-dom"
import { Login, Logo, NavBarStyled, NavigationLinks } from "./styles/NavBar"
const NavBar = () => {
  return (
    <NavBarStyled>
      <Logo>
        <Link to="/">IDD Life</Link>
      </Logo>

      <NavigationLinks>
        <li>
          <Link to="/work-in-progress">About</Link>
        </li>

        <li>
          <Link to="/work-in-progress">System Navigation Tool</Link>
        </li>
        <li>
          <Link to="/work-in-progress">Online Resource Guide</Link>
        </li>
        <li>
          <Link to="/work-in-progress">Blog</Link>
        </li>
      </NavigationLinks>
      <Login>
        <Link to="/work-in-progress">LOGIN</Link>
      </Login>
    </NavBarStyled>
  )
}

export default NavBar
