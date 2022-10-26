import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from "redux/usersAuth/selectors";
import { useSelector } from "react-redux";

const PublicRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

PublicRoute.propTypes = {
  component: PropTypes.object,
  redirectTo: PropTypes.string,
}

export default PublicRoute;