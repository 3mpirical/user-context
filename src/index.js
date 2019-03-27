import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./provider/UserProvider";
import { LakeProvider } from "./provider/LakeProvider";
import App from './App';
import "./css/main.css";

ReactDOM.render(
    <UserProvider>
        <LakeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LakeProvider>
    </UserProvider>,
    document.getElementById('root')
);
