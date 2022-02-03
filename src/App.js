import axios from 'axios';
import { useContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
// import Login from './pages/Login'
import Home from './pages/Home'
import './App.css';
import HeroSearch from './pages/HeroSearch';
import HeroList from './pages/HeroList';
import userContext from './contexts/UserContext';

const App = () => {
  // const user = useContext(userContext)
  // console.log(user)
   return (
    <div>
        <userContext.Provider value={'Carmen'}>
          <Nav />
        </userContext.Provider>
        
        {/* <Footer/> */}
    </div>
  );
}

export default App;
