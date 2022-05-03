import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let state = {
  postsData : [
    { id: 1, text: 'Hi!', likeCount: 15, views: 93 },
    { id: 2, text: 'Hi2!', likeCount: 11, views: 43 },
    { id: 3, text: 'Hi3!', likeCount: 12, views: 92 },
  ],
  messagesData :[
    {id : 1, message : 'one'},
    {id : 2, message : 'two'},
    {id : 3, message : 'three'},
  ],
  dialogsData : [
    {id:1, name : 'Igor'},
    {id:2, name : 'Max'},
    {id:3, name : 'Dima'},
    {id:4, name : 'Vova'}
  ]
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state = {state}/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
