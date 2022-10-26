import ContactForm from '../../components/ContactsForm/ContactsForm';
import Filter from '../../components/Filter/Filter';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';
import { TitlePhonebook, SubtitleContacts } from './ContactsStyled';
import { Container } from 'components/UniversalStyles/ContainerStyled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      
      <TitlePhonebook>
        <ContactPhoneSharpIcon sx={{mr: 1, my: 0.5, fontSize: 35 }}/>
        Phonebook
      </TitlePhonebook>
      <ContactForm />
      <SubtitleContacts>Contacts:</SubtitleContacts>
      <Filter /> 
    </Container>
  )
}

export default Contacts;