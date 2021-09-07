import './index.css';
import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let RerenderJs=(state)=>{
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App State={state}/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);}
RerenderJs(store.getState());
store.subscribe(RerenderJs);

