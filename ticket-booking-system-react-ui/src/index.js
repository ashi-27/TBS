<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App/>,
  document.getElementById('root')
=======
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
 </BrowserRouter>,
  document.getElementById("root")
>>>>>>> 72069baef93cff9eb56408210ca99b74fde50483
);
