import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/usersAuth/operations';

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
    <form onSubmit={handleSubmit}>
        <label>Email
            <input type="email" name="email" />
        </label>
        <label>Password
            <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>

    </form>
)
}

export default LoginForm;