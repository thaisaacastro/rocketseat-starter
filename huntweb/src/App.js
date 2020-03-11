import React, { Component } from 'react';
import Routes from './routes';
import "./style.css"

import Header from './componentes/Header';
import Main from "./pages/main";

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
