import React from 'react';
import axios from 'axios';
import { useContext, useState, useEffect } from 'react'

const HeroSearch = () => {

    const [foundCharacter, setFoundCharacter] = useState([])

    const handleSubmit = e => {
        e.preventDefault()

    }
    useEffect(() => {
        searchCharacter()
    }, [])

    const searchCharacter = async (superHeroID) => {
        try {
            const response = await axios.get("https://www.superheroapi.com/api.php/10158975138651775/search/" + { superHeroID })
            setFoundCharacter(response.data.results)
            // console.log(response.data.results)
            // console.log(sHeroCharacter[0]?.name)
            // console.log(sHeroCharacter[0]?.image?.url)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Inside Search</h1>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="userInput">Character Search:</label>
                <input
                    type="text"
                    id='userInput'
                    name='userInput'
                    onChange={handleChange}
                    value={userInput}
                />
                <input type="submit" value='submit' />
            </form> */}

            {/* <form action="">Search</form> */}

        </div>
    );
}

export default HeroSearch;
