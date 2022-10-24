import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from "redux/usersAuth/selectors";
import { useSelector } from "react-redux";


const PublicRoute = ({ component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default PublicRoute;