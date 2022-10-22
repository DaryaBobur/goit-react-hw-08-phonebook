import ContactForm from '../../components/ContactsForm/ContactsForm';
import Filter from '../../components/Filter/Filter';
import { FcPhoneAndroid } from "react-icons/fc";
import { Title, Subtitle } from '../../components/App/AppStyled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';


const Contacts = () => {
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
return (
    <>
    
      <Title>
        <FcPhoneAndroid/>
        Phonebook
      </Title>

      <ContactForm />

      <Subtitle>Contacts</Subtitle>

      <Filter /> 
    </>
)
}

export default Contacts;