import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/usersAuth/selectors";
import { NavLinkStyled, NavItem, NavList } from "./NavigationStyled";

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <NavList>
            <NavItem>
                <NavLinkStyled to="/" end>Home</NavLinkStyled>
            </NavItem>

            {isLoggedIn && 
                <NavItem>
                    <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
                </NavItem>
            }
        </NavList>
    )
}

export default Navigation;