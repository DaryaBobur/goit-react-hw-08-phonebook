import { configureStore,} from '@reduxjs/toolkit';
import { filtersSlice } from 'redux/contacts/filterSlice';
import { contactsSlice } from 'redux/contacts/contactsSlice';
import { usersAuthSlice } from './usersAuth/usersAuthSlice';
// getDefaultMiddleware 
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];
// const usersPersistConfig = {
//   key: 'users',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    users: usersAuthSlice.reducer,
    contacts: contactsSlice.reducer,
    filter: filtersSlice.reducer
  },
});

// export const persistor = persistStore(store);
