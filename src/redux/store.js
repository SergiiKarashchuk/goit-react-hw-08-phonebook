import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';

// Параметром конфігурації для перевірки серіалізвції всіх actions, що передаються
// в сховище, та виключає з перевірки actions `FLUSH`, `REHYDRATE`, `PAUSE`, `PERSIST`,
// `PURGE`, `REGISTER`.
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Параметри для persistReducer для збереження токена з authSlice в локальне сховище
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// Глобальний стор
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    tasks: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
