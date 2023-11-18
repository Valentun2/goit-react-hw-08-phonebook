import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useEffect } from 'react';
import Login from './LoginForm/LoginForm';
import LoginForm from './LoginForm/LoginForm';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Layout from './Layout/Layout';

export const App = () => {
 
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<HomePage/>}/>

    </Route>
      <Route path='login' element={<LoginForm/>} />

    </Routes>
    
    </>
  );
};
