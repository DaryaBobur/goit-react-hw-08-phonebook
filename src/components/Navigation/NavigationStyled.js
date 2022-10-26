import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
display: flex;
gap: 10px;
padding: 0;
`

export const NavItem = styled.li`
display: flex;
list-style: none;

`

export const NavLinkStyled = styled(NavLink)`
padding-top: 10px;
padding-bottom: 10px;
font-weight: 700;
font-size: 18px;
color: #2a2a2a;
text-decoration: none;

  &.active {
      color: #6495ad;
  }

  :hover, :focus {
    color: #a0d2eb;
  } 
`

