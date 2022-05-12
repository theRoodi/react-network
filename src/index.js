import store from './redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerender = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()} 
                    addPost={store.addPost.bind(store)} 
                    postUpdate = {store.postUpdate.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerender(store.getState());

store.subscribe(rerender)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
