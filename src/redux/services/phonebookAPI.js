import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Утиліта для додавання JSON Web Token
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Утиліта для видалення JSON Web Token
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Запит на реєстрацію користувача
export const userRegistration = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
};

// Запит на авторизацію користувача
export const userAuthorization = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  return data;
};

// Запит на вихідкористувача з профіля
export const userLogOut = async () => {
  await axios.post('/users/logout');
};

// Запит на отримання данних про поточного користувача
export const userRefreshing = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};

// Запит на отримання всіх данних
export const requestFetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

// Запит на створення нового контакта
export const requestAddContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

// Запит на видалення контакта
export const requestDeleteContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};

// Запит на оновлення існуючого контакта
export const requestUpdateContact = async contactId => {
  const { data } = await axios.patch(`/contacts/${contactId}`);
  return data;
};
