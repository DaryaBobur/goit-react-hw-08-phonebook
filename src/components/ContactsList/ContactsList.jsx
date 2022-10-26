import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { Contacts } from './ContactsListStyled';
import { deleteContact } from '../../redux/contacts/operations'

import IconButton from '@mui/material/IconButton'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

const ContactsList = ({ contacts }) => {
   const dispatch = useDispatch();
   return (  
      <Contacts>
         {contacts.map(({ name, number, id }) => ( 
            <li key={nanoid()}>
               <p><AccountCircleSharpIcon/> {name} : {number}</p>
               <IconButton aria-label="delete" size="small" type='button' onClick={()=> dispatch(deleteContact(id))}>
                 <DeleteSharpIcon fontSize="small" />
               </IconButton>
            </li>
         ))}
      </Contacts>
   )
}

ContactsList.propTypes = {
   removeContact: PropTypes.func,
   contacts: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
   }))
}

export default ContactsList;