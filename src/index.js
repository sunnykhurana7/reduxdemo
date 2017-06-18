import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import './index.css';
const store = configureStore()
import App from './store/app'

ReactDOM.render(
   <Provider store={store}>
        <App />
   </Provider>,
  document.getElementById('root')
);
