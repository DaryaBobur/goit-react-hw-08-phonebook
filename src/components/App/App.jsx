import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { getIsCurrentUser } from "redux/usersAuth/selectors";
import { currentUser } from 'redux/usersAuth/operations';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import("page/Home/Home"));
const Contacts = lazy(() => import("page/Contacts/Contacts"));
const Register = lazy(() => import("page/Register/Register"));
const Login = lazy(() => import("page/Login/Login"));

const App = () => {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(getIsCurrentUser);

  useEffect(()=> {
    dispatch(currentUser());
  }, [dispatch])

  return (
    <>
    { !isCurrentUser &&
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<PublicRoute redirectTo="/contacts" component={<Register />} />}/>
            <Route path="/login" element={<PublicRoute redirectTo="/contacts" component={<Login />} />} />
            <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts/>} />}/>
          </Route>
        </Routes>
    }
    </>
  )
};

export default App;