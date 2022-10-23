
import { ContainerApp} from './AppStyled';
import { Routes, Route } from "react-router-dom";
import Layout from 'components/Layout/Layout';
import Home from 'page/Home/Home';
import Contacts from 'page/Contacts/Contacts';
import Register from 'page/Register/Register';
import Login from 'page/Login/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUser } from 'redux/usersAuth/operations';

const App = () => {
const dispatch = useDispatch();

useEffect(()=> {
  dispatch(currentUser());
}, [dispatch])


  return (
    <ContainerApp>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Route>
    </Routes>
    
      

    </ContainerApp>
  )
};

export default App;