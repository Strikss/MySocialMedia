import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


export let RerenderJs=(state)=>{
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App State={state} />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);}