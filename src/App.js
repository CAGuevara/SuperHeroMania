import axios from 'axios';
import { useContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
// import Login from './pages/Login'
import Home from './pages/Home'
import './App.css';
import HeroSearch from './pages/HeroSearch';
import HeroList from './pages/HeroList';


const App = () => {

  return (
    <div>
        <Nav />
        
        {/* <Footer/> */}
    </div>
  );
}

export default App;
