import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import store from './store';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Provider >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
document.getElementById('root')
);
// registerServiceWorker();
