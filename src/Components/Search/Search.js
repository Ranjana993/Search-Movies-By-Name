import React from 'react'
import "./Search.css"
import { useGlobalContext } from '../../Context'

const Search = () => {
    const { query, setQuery, error } = useGlobalContext()
    return (
        <><div className="Search">
            <h2>Search Your Favourite Movie here ....</h2>
            <form action="">
                <input type="text" placeholder='Search' value={query} onChange={(e) => {
                    e.preventDefault()
                    setQuery(e.target.value)
                }} />
            </form>
            {/* <div>
                <p>{error.show === true && error.msg}</p>
            </div> */}
        </div>

        </>
    )
}

export default Search