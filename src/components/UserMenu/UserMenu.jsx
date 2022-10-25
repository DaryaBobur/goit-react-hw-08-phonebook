import { useSelector } from "react-redux";
import { getUserEmail } from "redux/usersAuth/selectors";
import { useDispatch } from "react-redux";
import { logOutUser } from "redux/usersAuth/operations";
import { Menu } from "./UserMenuStyled";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

return (
<Menu>
  <p>Welcome, {userEmail}!</p>
  <button type="button" onClick={()=> dispatch(logOutUser())}>Logout</button>
</Menu>
)
}

export default UserMenu;