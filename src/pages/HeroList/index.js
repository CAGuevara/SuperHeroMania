import React from 'react';
import axios from 'axios';
import { useContext, useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import './styles.css'
import App from '../../App';

const HeroList = ({cart, setCart}) => {
    const [sHeroCharacter, setSHeroCharacter] = useState([])
    const [addCart, setAddCart] = useState([]) 
    const [addQtyCart,setAddQtyCart] = useState([])
    const itemsPerPage = 6;


// Adding Items to Cart 
    const addToCart = (itemsInCart) =>{
        const exist = cart.find( x => x.id === itemsInCart.id);
        if (exist) {
            setCart(cart.map( x=> x.id === itemsInCart.id ? {...exist,qty:exist.qty+1}:x))
        }else {
            setCart([...cart,{...itemsInCart,qty : 1}])
        }
    }


    const fetchCharacter = async () => {
        try {
            const response = await axios.get("https://www.superheroapi.com/api.php/10158975138651775/search/man")
            setSHeroCharacter(response.data.results)
            
        } catch (error) {
            console.log(error)
        } finally{
             setPageCount(Math.ceil(65/ itemsPerPage));
        }
    }

    const [currentCharacter, setCurrentCharacter] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        fetchCharacter()
       
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading sHeroCharacter from ${itemOffset} to ${endOffset}`);
        setCurrentCharacter(sHeroCharacter.slice(itemOffset, endOffset));
        // console.log(sHeroCharacter)
        
    }, [itemOffset, itemsPerPage,pageCount]);

    const Items = () => {
        return (
            <div id='card-container'>
                {currentCharacter &&
                    currentCharacter.map((item) => (
                        <div className="card hero-card">
                            <img id= "pict-set"src={item.image.url} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.work.occupation}</p>
                                    <div id='detail-container'>
                                    {
                                        (item.powerstats.power!="null") ? 
                                        <button className="btn btn-primary" onClick={()=> addToCart(item)}>Add To Cart</button>
                                        :
                                        <button className="btn btn-primary" disabled>Sold-Out</button>
                                        
                                    }    
                                    <a href="#" id="price" className="btn btn-primary">Price : ${(item.powerstats.power!="null")? item.powerstats.power : "Sold-Out" }</a>
                                    </div>
                                </div>
                        </div>

                    ))}
            </div>
        );
    }


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % sHeroCharacter.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div>
            <Items />
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />

        </div>
    );
}

export default HeroList;
