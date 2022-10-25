import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/usersAuth/operations';
import { Form } from './RegisterFormStyled';
import { GoMail, GoLock, GoPerson } from "react-icons/go";
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
            <label><GoPerson/>Name
            <input type="name" name="name"/>
            </label>
            <label><GoMail/>Email
            <input type="email" name="email" />
            </label>
            <label><GoLock/>Password
            <input type="password" name="password" />
            </label>
            <button type="submit">Register</button>
        </Form>
    )
}

RegisterForm.propTypes = {
onSubmit: PropTypes.func,
}

export default RegisterForm;
