import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOutUser } from 'redux/usersAuth/operations';
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
      toast.success(`Contact ${action.payload.name} added!`);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex((contact) => contact.id === action.meta.arg);
      state.items.splice(index, 1);
      toast.success(`Contact is deleted!`);
    },
    [deleteContact.rejected]: handleRejected,

    [logOutUser.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});