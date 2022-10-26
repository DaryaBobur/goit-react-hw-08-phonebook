import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/usersAuth/operations';
import { Form } from './RegisterFormStyled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LockPersonSharpIcon from '@mui/icons-material/LockPersonSharp';

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const formData = evt.currentTarget;
        dispatch(registerUser({
            name: formData.elements.name.value,
            email: formData.elements.email.value,
            password: formData.elements.password.value,
        }))
        formData.reset();   
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PersonSharpIcon 
                    sx={{mr: 1, my: 0.5, color: '#2a2a2a' }}
                />

                <TextField       
                    size="small"
                    label="Name" 
                    variant="outlined"
                    type="text"
                    name="name"
                    margin="dense"
                    required
                />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MailSharpIcon 
                    sx={{mr: 1, my: 0.5, color: '#2a2a2a' }}
                />

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
                <LockPersonSharpIcon 
                    sx={{mr: 1, my: 0.5, color: '#2a2a2a' }}
                />

                <TextField 
                    size="small"
                    label="Password" 
                    variant="outlined"
                    margin="dense"
                    type="password"
                    name="password"
                    inputProps={{ minlength: "7"  }}
                    required
       
                />
            </Box>
            <Button variant="contained" type="submit">Register</Button>
        </Form>
    )
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
}

export default RegisterForm;
