import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled'

export const AuthNavList = styled.ul`
display: flex;
align-items: center;
gap: 20px;
`

export const AuthNavItem = styled.li`
list-style: none;
`

export const AuthNavLink = styled(NavLink)`
padding-top: 10px;
padding-bottom: 10px;
font-weight: 700;
font-size: 16px;
color: #2a2a2a;
text-decoration: none;

  &.active {
      color: #6495ad;
  }

  :hover, :focus {
    color: #a0d2eb;
  } 
`