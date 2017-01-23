import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import Counter from './containers/Counter';
import configureStore from './store/configureStore'
import './index.css';
const store = configureStore()

ReactDOM.render(
   <Provider store={store}>
      <Counter />
   </Provider>,
  document.getElementById('root')
);
