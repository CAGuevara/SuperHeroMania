import axios from 'axios';
import { useContext, useState, useEffect } from 'react'
import { Routes, Route, Router } from 'react-router-dom';
//Import Components
import Nav from './components/Nav';

//Import Pages
import Login from './pages/Login'
import Home from './pages/Home'
import HeroSearch from './pages/HeroSearch';
import HeroList from './pages/HeroList';
import userContext from './contexts/UserContext';
import ShoppingCart from './pages/ShoppingCart';

import './App.css';

const App = () => {
  // const user = useContext(userContext)
  // console.log(user)

  const [user, setUser] = useState('')


  return (
    <div>

      <userContext.Provider value={user}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='character/List' element={<HeroList />} />
          <Route path='character/Search' element={<HeroSearch />} />
          <Route path='shoppingCart' element={<ShoppingCart />} />

        </Routes>

      </userContext.Provider>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
