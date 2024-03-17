import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';

import localesEsMessages from './locales/es.json';
import localesEnMessages from './locales/en.json';

const userLanguage = navigator.language || navigator.userLanguage;
const jsonToUse = userLanguage === 'es' ? localesEsMessages : localesEnMessages;

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={userLanguage} messages={jsonToUse}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();