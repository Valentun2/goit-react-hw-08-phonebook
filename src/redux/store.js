import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlise';
import { filterReducer } from './filterSlise';
import { userReduser } from './userSlise';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
key: 'root',
storage,
whitelist: ['authorizationToken']
}

const persisteduserReduser = persistReducer(persistConfig, userReduser)


export const store = configureStore( {
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: persisteduserReduser
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
 
})

export const persistor = persistStore(store)