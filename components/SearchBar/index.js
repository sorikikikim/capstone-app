import React, {useState} from 'react';
import './index.css'


const SearchBar  = (props) =>{

    const [ inputSearch, setInputSearch] = useState('');

    const handleChange = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputSearch(lowerCase);
    }

    return(
        <input className='searchBar' type={'text'} onChange={handleChange} /> 
		
    );
};

export default SearchBar;