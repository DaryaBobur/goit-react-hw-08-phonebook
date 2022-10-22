import { useDispatch  } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { fetchContacts } from 'redux/operations';
import { ContainerApp, Title, Subtitle } from './AppStyled';

import { Routes, Route } from "react-router-dom";
import AppBar from 'components/AppBar/AppBar';
import Home from 'page/Home/Home';
import Contacts from 'page/Contacts/Contacts';
import Register from 'page/Register/Register';
import Login from 'page/Login/Login';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerApp>
<AppBar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/contacts" element={<Contacts />}/>
    </Routes>
    
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

    </ContainerApp>
  )
};

export default App;