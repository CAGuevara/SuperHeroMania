import React from 'react';
import axios from 'axios';
import { useContext, useState, useEffect } from 'react'
import './styles.css'

const HeroSearch = () => {

    const [foundCharacter, setFoundCharacter] = useState([])
    const [stringSearch, setStringSearch] = useState('')

    let superHeroID = ''


    const handleChange = e => {
        setStringSearch(e.target.value)
        console.log(stringSearch)
    }

    const handleSubmit = e => {
        e.preventDefault()
        searchCharacter(stringSearch)

    }
    // useEffect(() => {
    //     searchCharacter(stringSearch)
    // }, [stringSearch])

    const searchCharacter = async (stringSearch) => {

        try {
            const response = await axios.get(`https://www.superheroapi.com/api.php/10158975138651775/search/${stringSearch}`)
            setFoundCharacter(response.data.results)

        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div>

            <div className="ui form success">
                <div className="field">
                    <label>Type the Name of the Character you are looking for</label>
                    <input value={stringSearch} onChange={handleChange} type="text" />
                </div>

                <button className="ui submit button" onClick={() => {
                    return searchCharacter(stringSearch)
                }}>Search</button>
            </div>
            {console.log('inside return', foundCharacter)}
            {
                foundCharacter.map(item => {
                    return (
                        <div id='card-container'>
                        <div className="card hero-card">
                            <img id= "pict-set"src={item.image.url} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.work.occupation}</p>
                                    <div id='detail-container'>
                                    {
                                        (item.powerstats.power!="null") ? 
                                        <button className="btn btn-primary">Add To Cart</button>
                                        :
                                        <button className="btn btn-primary" disabled>Sold-Out</button>
                                        
                                    }    
                                    <a href="#" id="price" className="btn btn-primary">Price : ${(item.powerstats.power!="null")? item.powerstats.power : "Sold-Out" }</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    )
                })
            }

        </div>
    );
}

export default HeroSearch;
