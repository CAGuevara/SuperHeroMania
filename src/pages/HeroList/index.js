import React from 'react';
import axios from 'axios';
import { useContext, useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

const HeroList = () => {
    const [sHeroCharacter, setSHeroCharacter] = useState([])
    const itemsPerPage = 7;

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
    // const listOfCharacters = sHeroCharacter.map((hero, i) => <li key={i}>{hero.name}</li>)

    // We start with an empty list of sHeroCharacter.
    const [currentCharacter, setCurrentCharacter] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch sHeroCharacter from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading sHeroCharacter from ${itemOffset} to ${endOffset}`);
        setCurrentCharacter(sHeroCharacter.slice(itemOffset, endOffset));
        
        if (currentCharacter) currPageCharacter()
        setPageCount(Math.ceil(sHeroCharacter.length / itemsPerPage));

    }, [itemOffset, itemsPerPage]);

const currPageCharacter =() => {
    try {
        const heroArr = []
        axios.all(sHeroCharacter.map(async (url) => {
            const response = await axios.get(url)
            // console.log(response.data)
            heroArr.push(response.data)
            setCurrentCharacter(heroArr.flat())
            // setCurrentPokemon([...currentPokemon, response.data])
        }))

    }catch (error) {

    }

}


    const Items = () => {
        return (
            <>
                {currentCharacter &&
                    currentCharacter.map((item) => (
                        <div>
                            <h3>{item.name}</h3>
                            <img src={item.image.url} />
                        </div>
                    ))}
            </>
        );
    }


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % sHeroCharacter.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

console.log(currentCharacter)

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
