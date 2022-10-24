import Navigation from "components/Navigation/Navigation";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/usersAuth/selectors";

const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
return (
    <header>
        <Navigation/>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </header>
)
}

export default AppBar;