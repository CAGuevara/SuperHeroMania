import React from 'react';
import axios from 'axios';
import { useContext, useState, useEffect } from 'react'

const HeroList = () => {
    const [sHeroCharacter, setSHeroCharacter] = useState([])

    useEffect(() => {
        fetchCharacter()
    }, [])

    const fetchCharacter = async () => {
        try {
            const response = await axios.get("https://www.superheroapi.com/api.php/10158975138651775/search/man")
            setSHeroCharacter(response.data.results)
            // console.log(response.data.results)
            // console.log(sHeroCharacter[0]?.name)
            // console.log(sHeroCharacter[0]?.image?.url)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>

            {
                sHeroCharacter.map(hero => {
                    return (
                        <div>
                            <h1>{hero.name}</h1>
                            <img src={hero.image.url} />
                        </div>
                    )
                })
            }


        </div>
    );
}

export default HeroList;
