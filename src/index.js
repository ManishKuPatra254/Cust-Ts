import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-25to7ao5tme0j4br.us.auth0.com"
    clientId="duQYPo9NE9KTmnmSQMt3nn0PmphKJknc"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <Provider store={store}>
      <App />
    </Provider>

  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
