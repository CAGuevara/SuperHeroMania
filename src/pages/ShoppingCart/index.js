import React from 'react';

const ShoppingCart = ({ cart, setCart }) => {
    let cartTotal = 0;
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
                                        <div id='detail-container'>
                                            <button className="btn btn-primary">Remove</button>
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
