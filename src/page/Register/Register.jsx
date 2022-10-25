import RegisterForm from "components/RegisterForm/RegisterForm";
import { Container } from "components/UniversalStyles/ContainerStyled";
import { Title } from "components/UniversalStyles/TitleStyled";
import { BsFillPersonFill } from "react-icons/bs";
const Register = () => {
return (
    <Container>
    <Title>Registration Page <BsFillPersonFill/></Title>
    
    <RegisterForm/>

    </Container>
)
}

export default Register;