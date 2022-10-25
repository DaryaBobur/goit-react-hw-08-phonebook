import ContactForm from '../../components/ContactsForm/ContactsForm';
import Filter from '../../components/Filter/Filter';
import { FcPhoneAndroid } from "react-icons/fc";
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
        <FcPhoneAndroid/>
        Phonebook
      </TitlePhonebook>

      <ContactForm />

      <SubtitleContacts>Contacts:</SubtitleContacts>

      <Filter /> 
    </Container>
)
}

export default Contacts;