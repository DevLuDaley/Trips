import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import {Provider} from 'react-redux';
import configureStore from './store/store';
import { Auth0Provider } from "@auth0/auth0-react";

import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const store = configureStore({});

ReactDOM.render(
  <Auth0Provider
    domain="dev-cgq8goq7.us.auth0.com"
    clientId="42RRDIGCRpyf2bQE33NLxKi0WhFkUjdT"
    redirectUri={window.location.origin}
  >

  <Auth0Provider>
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </Provider>
  rootElement);
  <Auth0Provider/>,

registerServiceWorker();

