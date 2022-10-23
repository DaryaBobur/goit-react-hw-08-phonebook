import { useSelector } from "react-redux";
import { getUserEmail } from "redux/usersAuth/selectors";
import { useDispatch } from "react-redux";
import { logOutUser } from "redux/usersAuth/operations";
const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

return (
<div>
  <p>Welcome, {userEmail}!</p>
  <button type="button" onClick={()=> dispatch(logOutUser())}>Logout</button>
</div>
)
}

export default UserMenu;