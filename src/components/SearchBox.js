import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
    <div>
        <input 
        className= "tc searchfield pa3 ba b--green " 
        type= "search" 
        placeholder= "Search drummers"
        onChange= {searchChange}
        />
    </div>
    )
}
export default SearchBox;