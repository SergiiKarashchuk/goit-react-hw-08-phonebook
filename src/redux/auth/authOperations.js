import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/phonebookAPI';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const data = await api.userRegistration(credentials);
      api.setAuthHeader(data.token);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const data = await api.userAuthorization(credentials);
      api.setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await api.userLogOut();
    api.clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  // Читання токена зі стану через getState()
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    // Якщо є токен, додаємо його в HTTP-заголовок та виконуємо запит
    api.setAuthHeader(persistedToken);
    const data = await api.userRefreshing();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
