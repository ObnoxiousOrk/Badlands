import logo from './logo.svg';
import './App.css';

import LoginForm from './LoginForm.js'
import Page from './Page.js'

import { React, useState, createContext } from 'react'

import initSqlJs from "sql.js";
// eslint-disable-next-line import/no-webpack-loader-syntax
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";
// Required to let webpack 4 know it needs to copy the wasm file to our assets

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
