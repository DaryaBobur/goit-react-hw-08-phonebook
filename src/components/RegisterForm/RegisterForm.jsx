import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/usersAuth/operations';

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
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name
            <input type="name" name="name"/>
            </label>
            <label>Email
            <input type="email" name="email" />
            </label>
            <label>Password
            <input type="password" name="password" />
            </label>
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm;
