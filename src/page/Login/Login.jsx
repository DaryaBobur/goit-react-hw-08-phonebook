import LoginForm from "components/LoginForm/LoginForm"
import { BsFillPersonFill } from "react-icons/bs";
import { Container } from "components/UniversalStyles/ContainerStyled";
import { Title } from "components/UniversalStyles/TitleStyled";

const Login = () => {
    return (
        <Container>
         <Title>Login page <BsFillPersonFill/></Title>
         <LoginForm/>
        </Container>
    )
} 

export default Login;