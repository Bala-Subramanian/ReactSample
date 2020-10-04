import React from 'react'

function SearchComponent({ placeholder, handleRequest }) {
    return (
        <input type="search" name="search" placeholder={placeholder} onChange={handleRequest} />
    )
}

export default SearchComponent
