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
        // searchCharacter(superHeroID)

    }
    // useEffect(() => {
    //     
    // }, [stringSearch])

    const searchCharacter = async (stringSearch) => {
        // console.log('inside search',stringSearch)
        try {
            const response = await axios.get(`https://www.superheroapi.com/api.php/10158975138651775/search/${stringSearch}`)
            setFoundCharacter(response.data.results)
            // console.log(foundCharacter[0].image.url)
            // console.log(foundCharacter[0].image?.url)
            console.log('first time',foundCharacter)
            // console.log(foundCharacter)
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div>
            {console.log(foundCharacter)}
            <div className="ui form success">
                <div className="field">
                    <label>Type the Name of the Character you are looking for</label>
                    <input value={stringSearch} onChange={handleChange} type="text" />
                </div>

                <button className="ui submit button" onClick={() => {
                    return searchCharacter(stringSearch)
                }}>Search</button>
            </div>
            {

                    foundCharacter.map(item => {
                        return (   
                            
                            <div className="card">
                            <div className="image">
                              <img src="/images/avatar2/large/matthew.png"/>
                            </div>
                            <div className="content">
                              <div className="header">Matt Giampietro</div>
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
