import logo from './logo.svg';
import './App.css';

import LoginForm from './LoginForm.js'
import Page from './Page.js'

import { React, useState, createContext } from 'react'


function App() {
  let loggedIn = true; // TODO :: Add login form later
  let content = "";

  return (
    <div>
      {loggedIn ? <Page /> : <LoginForm />
      }
    </div>
  );
}

export default App;
