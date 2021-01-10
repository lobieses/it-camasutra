import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App 
    profilePosts = {[
      {message: '1'},
      {message: '2'},
      {message: '3'}
    ]}
    dialogNames = {[
      {id: 1, name: 'Сережа'},
      {id: 2, name: 'Катя'},
      {id: 3, name: 'Эва'}
    ]}
    dialogChatMessages = {[
      {name: 'name', message: 'hi'},
      {name: 'name', message: 'hi'},
    ]}
    />
  </React.StrictMode>,
  document.getElementById('root')             
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
