import { AuthNavList, AuthNavItem, AuthNavLink } from "./AuthNavStyled";

const AuthNav = () => {
    return (
        <AuthNavList>
            <AuthNavItem>
                <AuthNavLink to="/register" end>Register</AuthNavLink>
            </AuthNavItem>
            <AuthNavItem>
                <AuthNavLink to="/login">Log In</AuthNavLink>
            </AuthNavItem>
        </AuthNavList>
    )
} 

export default AuthNav;