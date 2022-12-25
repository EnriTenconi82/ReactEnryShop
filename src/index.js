import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKANK3qWfwwH8lekoRvPt_Gi__DTzLYmg",
    authDomain: "enryshop-5d2a1.firebaseapp.com",
    projectId: "enryshop-5d2a1",
    storageBucket: "enryshop-5d2a1.appspot.com",
    messagingSenderId: "264362394803",
    appId: "1:264362394803:web:77e4b6edffbdaed5269cc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
