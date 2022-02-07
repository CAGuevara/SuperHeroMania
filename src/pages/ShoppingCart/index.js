import React from 'react';
import { useContext, useState, useEffect } from 'react'
import './styles.css'

const ShoppingCart = ({ cart, setCart }) => {
    let cartTotal = 0;
    let qty = 1;

    //Function to remove items from Shopping Cart
    const removeFromCart = (item) =>{
        console.log("We need to Remove", item)
        let  cart1 = [... cart];
        cart1 = cart.filter((t) => t !== item )
        setCart([...cart1])
    }


    
    const checkOut = () => {
    console.log ("total amount owed")
    }

    return (
        <div>
            <div id='card-container'>
                {
                    cart.map(item => {
                        cartTotal = cartTotal + parseInt(item.powerstats.power)
                        return (

                            <div id='card-container'>
                                <div className="card hero-card">
                                    <img id="pict-set" src={item.image.url} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        {/* <p className="card-text">{item.work.occupation}</p> */}
                                        <div id='cart-container'>
                                             <div id='qty' className="field">
                                                <label>Qty</label>
                                                <input id="qty-field" value={qty} type="text" />
                                            </div>
                                            <button className="btn btn-primary" onClick={()=> removeFromCart(item)}>Remove</button>
                                            <a href="#" id="price" className="btn btn-primary">Price : ${item.powerstats.power}</a>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h1>
                    Total Amount : {cartTotal}
                </h1>
            </div>

        </div>
    );
}

export default ShoppingCart;
