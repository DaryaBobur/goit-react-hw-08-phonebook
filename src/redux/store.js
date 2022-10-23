import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { filtersSlice } from 'redux/contacts/filterSlice';
import { contactsSlice } from 'redux/contacts/contactsSlice';
import { usersAuthSlice } from './usersAuth/usersAuthSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware ({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const usersAuthPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(usersAuthPersistConfig, usersAuthSlice.reducer),
    contacts: contactsSlice.reducer,
    filter: filtersSlice.reducer
  },
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
