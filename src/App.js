import axios from 'axios';
import { useContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './pages/Login'
import Home from './pages/Home'
import './App.css';

const App = () => {

  return (
    <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='pokemon/list'/> */}
        
        </Routes>
    </div>
  );
}

export default App;
