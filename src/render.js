import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, postUpdate } from './redux/state'


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerender = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} 
                    addPost={addPost} 
                    postUpdate = {postUpdate} />
            </BrowserRouter>
        </React.StrictMode>
    );
}
