import ContactForm from '../../components/ContactsForm/ContactsForm';
import Filter from '../../components/Filter/Filter';
import { FcPhoneAndroid } from "react-icons/fc";
import { Title, Subtitle } from '../../components/App/AppStyled';
const Contacts = () => {
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