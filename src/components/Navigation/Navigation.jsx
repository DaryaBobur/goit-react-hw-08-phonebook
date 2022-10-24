import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/usersAuth/selectors";


const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            {isLoggedIn && <li><NavLink to="/contacts" end>Contacts</NavLink></li>}
            
        </ul>
    
      
    )
}

export default Navigation;