import LoginForm from "components/LoginForm/LoginForm"
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import { Container } from "components/UniversalStyles/ContainerStyled";
import { Title } from "components/UniversalStyles/TitleStyled";

const Login = () => {
    return (
        <Container>
            <Title>
                Login page
                <PersonSharpIcon/>
            </Title>
            <LoginForm/>
        </Container>
    )
} 

export default Login;