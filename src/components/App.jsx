
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Layout from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import LoginPage from 'pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/operations';
import { Toaster } from 'react-hot-toast';

export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(getUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return ( isRefreshing ? (
    <b>Refreshing user...</b>
  ) :
    <>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={  <PrivateRoute redirectTo="/login" component={<HomePage />} />}/>

    </Route>
      <Route path='login' element={ <RestrictedRoute redirectTo="/" component={<LoginPage/>}/>} />

    </Routes>
    <Toaster />
    </>
  );
};
