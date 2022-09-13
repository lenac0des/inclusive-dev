import styled from "styled-components"

export const NavBarStyled = styled.nav`
  height: 99px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  color: #000000;
  position: relative;
  z-index: 999;
  & > :nth-child(1),
  & > :nth-child(2) {
    margin-right: 74px;
  }

  & > h2 > a,
  & > ul > li > a,
  & > button > a {
    all: unset;
  }
  
  & > button > a{
    padding: 11px 16px;
  }
`

export const Logo = styled.h2`
  width: 252px;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  margin-left: 70px;
  cursor: pointer;
`

export const NavigationLinks = styled.ul`
  padding: 0;
  display: flex;
  height: 45px;

  li {
    list-style: none;
    margin-right: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  }
`

export const Login = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 76px;
  height: 36px;

  background: #000000;
  border: 1px solid #000000;
  border-radius: 8px;

  color: #ffffff;

  font-size: 14px;
  font-weight: 600;

  margin-left: auto;
  margin-right: 63px;
  cursor: pointer;
  
  
  

`
