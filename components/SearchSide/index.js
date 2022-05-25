import React from 'react';
import './index.css'


const SearchSide  = (props) => {
    return(
        <div>
            <ul className='searchList'>
            <li>전체보기</li>
            <li>전공서적</li>
            <li>전자기기</li>
            <li>의류</li>
            <li>기타</li>
            </ul>
         </div>
    );
};

export default SearchSide;