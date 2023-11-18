import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlise';
import { filterReducer } from './filterSlise';
import { userReduser } from './userSlise';

export const store = configureStore( {
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: userReduser
  },
 
})

