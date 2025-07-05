import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import  appStore  from './Utils/appStore';
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={appStore}>
      <App />
    </Provider>
  </StrictMode>,
)
