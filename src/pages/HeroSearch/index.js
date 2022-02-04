import React from 'react';
import axios from 'axios';
import { useContext, useState, useEffect } from 'react'

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
             {console.log('inside return',foundCharacter)}
            {

                    foundCharacter.map(item => {
                        return (   
                            
                            <div className="card">
                            <div className="image">
                              <img src={item.image.url}/>
                            </div>
                            <div className="content">
                              <div className="header">{item.name}</div>
                              <div className="meta">
                                <a>Friends</a>
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
