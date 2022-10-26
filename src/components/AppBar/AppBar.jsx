import { useSelector } from "react-redux";
import Navigation from "components/Navigation/Navigation";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import { getIsLoggedIn } from "redux/usersAuth/selectors";
import { Header } from "./AppBarStyled";

const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <Header>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </Header>
    )
}

export default AppBar;