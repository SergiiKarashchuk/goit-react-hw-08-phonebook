import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorNotification, successNotification } from 'hooks/useToasts';
import {
  clearAuthHeader,
  contactApi,
  setAuthHeader,
} from 'services/phonebookAPI';

contactApi();

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      successNotification('Successful registration');
      return response.data;
    } catch (error) {
      errorNotification(`${error.response.data.message} Please try again.`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);

      successNotification('Successful authorization');
      return response.data;
    } catch (error) {
      errorNotification(
        `Something went wrong. Invalid login or password. Please try again. ❌`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
    successNotification('Successful logout');
  } catch (error) {
    errorNotification('Something went wrong. Please try again. ❌');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
