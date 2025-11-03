import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Routing from './Routing';
import { createContext } from 'react';
import { useState } from 'react';

export const Store = createContext();
const App = () => {
  const [token, setToken] = useState('');
  return (
    <Store.Provider value={[token, setToken]}  >
      <Header />
      <Routing />
      <Footer />
    </Store.Provider>
  )
}

export default App;