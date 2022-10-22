import { useSelector } from "react-redux";
import { getUser } from "redux/usersAuth/selectors";

const UserMenu = () => {
  const userName = useSelector(getUser);
  console.log(userName)
return (
<div>
  <p>Welcome, {userName}!</p>
  <button>Logout</button>
</div>
)
}

export default UserMenu;