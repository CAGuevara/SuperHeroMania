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
 const [cart, setCart] = useState([])

    // const addToCart = (itemsInCart) =>{
    //     console.log("We added", itemsInCart)
    //     console.log(cart)
    // }

  return (
    <div>

      <userContext.Provider value={user}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='character/List' element={<HeroList cart={cart} setCart={setCart}/>} />
          <Route path='character/Search' element={<HeroSearch cart={cart} setCart={setCart} />} />
          <Route path='shoppingCart' element={<ShoppingCart cart={cart} setCart={setCart}/>} />

        </Routes>

      </userContext.Provider>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
