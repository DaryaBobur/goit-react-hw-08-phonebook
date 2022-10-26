import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserEmail } from "redux/usersAuth/selectors";
import { logOutUser } from "redux/usersAuth/operations";
import { Menu } from "./UserMenuStyled";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  return (
  <Menu>
    <Avatar 
      sx={{ width: 24, height: 24 }} 
    />
    <p>Welcome, {userEmail}!</p>
    <Button variant="contained" type="button" onClick={()=> dispatch(logOutUser())}>logout</Button>
  </Menu>
  )
}

export default UserMenu;