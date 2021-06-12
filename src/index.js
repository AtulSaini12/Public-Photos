import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import reportWebVitals from './reportWebVitals';


const firebaseConfig = {
  apiKey: "AIzaSyAIJ6fVNEUfr9GPFiYsc7u8OvHJARSezns",
  authDomain: "cart-ce87b.firebaseapp.com",
  projectId: "cart-ce87b",
  storageBucket: "cart-ce87b.appspot.com",
  messagingSenderId: "1050945899690",
  appId: "1:1050945899690:web:8251b7db94b6a37a2ed4d3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
