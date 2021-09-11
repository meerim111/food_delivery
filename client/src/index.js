import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'



import App from './App';
import store from "./redux/index"
import './css/index.css';
import './css/style.css'



ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,


  document.getElementById('root')
);

