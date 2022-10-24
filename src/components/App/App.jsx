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
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';



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
        <Route path="/register" element={<PublicRoute redirectTo="/contacts" component={<Register />} />}/>
        <Route path="/login" element={<PublicRoute redirectTo="/contacts" component={<Login />} />}/>
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts/>} />}/>
      </Route>
    </Routes>
    
      

    </ContainerApp>
  )
};

export default App;