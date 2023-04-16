import React from 'react';
// import './index.css';
import GlobalStyle from 'GlobalStyles';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* Обов'язкове прописання basename="/goit-react-hw-08-phonebook" */}
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
