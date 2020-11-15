import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './app/store';
import { Provider } from 'react-redux';

console.log(store.getState());

store.subscribe(() => console.log(store.getState())); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#root')
);