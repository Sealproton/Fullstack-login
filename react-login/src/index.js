import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignInSide  from './login.js'
import Album from './Album';
import SignUp from './Signup.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignInSide/>}/>
      <Route path='/login' element={<SignInSide/>}/>
      <Route path='/album' element={<Album/>}/>
      <Route path='/signup' element={<SignUp/>}/>

   
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
