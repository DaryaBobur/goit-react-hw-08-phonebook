import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterName } from 'redux/contacts/filterSlice';
import { getFilter, getContacts, getIsLoading, getError } from "redux/contacts/selectors";
import ContactsList from "components/ContactsList/ContactsList";
import Loader from 'components/Loader/Loader';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();
  const dataFilter = useSelector(getFilter);
  const dataContacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);

  const filterNamesContacts = e => {
    dispatch(filterName(e.target.value))
  };
  
  const getFilteredContacts = () => {
 
    if(!dataFilter) {
      return dataContacts;
    }

    const normalizedFilter = dataFilter.toLocaleLowerCase();

    const filteredContacts = dataContacts.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      return normalizedName.includes(normalizedFilter);
    })

    return filteredContacts;
    
  };

  return (
    <>
     <TextField 
      label="Find contacts by name" 
      variant="outlined"
      value={dataFilter} 
      type="text"
      name="filter"
      onChange={filterNamesContacts}
      size="small"
      />

      {dataContacts && <ContactsList contacts={getFilteredContacts()} />}
      {isLoading && !isError && <Loader/>}
    </>
  )
}

Filter.propTypes = {
  onChange: PropTypes.func,
}
  
export default Filter;