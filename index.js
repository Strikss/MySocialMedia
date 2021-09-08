import './index.css';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let RerenderJs=()=>{ 
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App 
    store={store}
    />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);}

RerenderJs();

store.subscribe(()=>{
  let state = store.getState();
  RerenderJs(state);
});

