import React from "react";
import ReactDOM from "react-dom";
import "./Styles/styles.css";
import "./Styles/tailwindStyles.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux/store";
import axios from "axios";
//axios bd local
//axios.defaults.baseURL = 'http://localhost:3001/';
//axios bd railway
axios.defaults.baseURL = 'https://henryinstruments-production-ef64.up.railway.app/';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
