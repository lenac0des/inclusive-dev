import styled from "styled-components"

export const NavBarStyled = styled.nav`
  /* outline: 1px white solid; */
  height: 99px;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  color: #000000;
  position: relative;
  z-index: 999;
  & > :nth-child(1),
  & > :nth-child(2) {
    margin-right: 74px;
  }
  
`

export const Logo = styled.h2`
  /* outline: 1px darkturquoise solid; */
  width: 252px;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  /* margin-right: 74px; */
  margin-left: 70px;
  cursor: pointer;
`

export const NavigationLinks = styled.ul`
  /* outline: 1px darkorange solid; */
  padding: 0;
  display: flex;
  height: 45px;

  li {
    list-style: none;
    margin-right: 74px;
    display: flex;
    align-items: center;
    justify-content: center;

    /* outline: 1px black solid; */
    cursor: pointer;
  }
`

export const Login = styled.button`
  width: 76px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 16px;
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  margin-left: auto;
  margin-right: 63px;
  cursor: pointer;
`
