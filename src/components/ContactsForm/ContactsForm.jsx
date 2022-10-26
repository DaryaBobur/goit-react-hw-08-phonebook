import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Form, ContainerForm } from './ContactsFormStyled';
import { addContact} from 'redux/contacts/operations';

import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import PhoneIphoneSharpIcon from '@mui/icons-material/PhoneIphoneSharp';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const ContactForm = () =>  {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const userInputId = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch(name) {
      case 'name':
      setName(value);       
      break;

      case 'number':
      setNumber(value);
      break;

      default:
      return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContainerForm>
      <PersonAddAltSharpIcon sx={{ mr: 1, my: 0.5 }}/>
      <TextField 
      id={userInputId} 
      size="small"
      label="Name" 
      variant="outlined"
      value={name}
      
      type="text"
      name="name"
      onChange={handleChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      />
</ContainerForm>
<ContainerForm>
    <PhoneIphoneSharpIcon sx={{ mr: 1, my: 0.5 }}/>
      <TextField 
      id={userInputId} 
      size="small"
      margin="normal"
      label="Number" 
      variant="outlined"
      value={number}
      type="tel"
      name="number"
      onChange={handleChange}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      />
</ContainerForm>

<Button variant="contained" type="submit">Add contact</Button>
    </Form>

  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default ContactForm;