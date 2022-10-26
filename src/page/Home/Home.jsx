import { Container } from "./HomeStyled";
import SupervisorAccountSharpIcon from '@mui/icons-material/SupervisorAccountSharp';

const Home = () => {
    return (
        <Container>
        <h1><SupervisorAccountSharpIcon sx={{mr: 1, my: 0.5, fontSize: 45 }}/>Welcome Phonebook App</h1>
        </Container>
    )
}

export default Home;