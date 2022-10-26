import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn, getIsCurrentUser } from "redux/usersAuth/selectors";

const PrivateRoute = ({ component, redirectTo='/'}) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isCurrentUser = useSelector(getIsCurrentUser);
    const isRedirected = !isLoggedIn && !isCurrentUser;
    return isRedirected ? <Navigate to={redirectTo} /> : component;
}

PrivateRoute.propTypes = {
    component: PropTypes.object,
    redirectTo: PropTypes.string,
}

export default PrivateRoute;  