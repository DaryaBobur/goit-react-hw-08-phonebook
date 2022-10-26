import RegisterForm from "components/RegisterForm/RegisterForm";
import { Container } from "components/UniversalStyles/ContainerStyled";
import { Title } from "components/UniversalStyles/TitleStyled";
import SupervisorAccountSharpIcon from '@mui/icons-material/SupervisorAccountSharp';
const Register = () => {
return (
    <Container>
    <Title>Registration Page <SupervisorAccountSharpIcon sx={{ fontSize: 40 }}/></Title>
    
    <RegisterForm/>

    </Container>
)
}

export default Register;