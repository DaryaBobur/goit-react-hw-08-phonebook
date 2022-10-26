import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/usersAuth/operations';
import { Form } from './LoginFormStyled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MailSharpIcon from '@mui/icons-material/MailSharp';

import LockPersonSharpIcon from '@mui/icons-material/LockPersonSharp';
const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const formData = evt.target;
        dispatch(logInUser({
            email: formData.elements.email.value,
            password: formData.elements.password.value,
        }))
         formData.reset();   
    }
return (
    <Form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
<MailSharpIcon sx={{mr: 1, my: 0.5, color: '#2a2a2a' }}/>
<TextField
     margin="dense"
      size="small"
      label="Email" 
      variant="outlined"
      type="email"
      name="email"
        required
     
      />
   </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
<LockPersonSharpIcon sx={{mr: 1, my: 0.5, color: '#2a2a2a' }}/>
<TextField 

      size="small"
      label="Password" 
      variant="outlined"
      margin="dense"
      
      type="password"
      name="password"
      required
      />

</Box>
      <Button variant="contained" type="submit">Log In</Button>

    </Form>
)
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
}

export default LoginForm;