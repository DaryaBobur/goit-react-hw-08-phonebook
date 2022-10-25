import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/usersAuth/operations';
import { Form } from './LoginFormStyled';
import { GoMail, GoLock } from "react-icons/go";

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
        <label>
        <GoMail/>Email
            <input type="email" name="email" />
        </label>
        <label>
        <GoLock/>Password
            <input type="password" name="password" />
        </label>
        <button variant="contained" type="submit">Log In</button>

    </Form>
)
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
}

export default LoginForm;