import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { contactApi } from 'services/phonebookAPI';
// import * as api from 'services/phonebookAPI';

contactApi();

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, thunkAPI) => {
//     try {
//       const data = await api.requestFetchContacts();
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const data = await api.requestAddContact(contact);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const data = await api.requestDeleteContact(contactId);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const updateContact = createAsyncThunk(
//   'contacts/updateContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const data = await api.requestUpdateContact(contactId);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
export const patchContacts = createAsyncThunk(
  'contacts/patchContact',
  async ({ name, id, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
