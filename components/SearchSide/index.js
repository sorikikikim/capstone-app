import React from 'react';
import './index.css'

//window.open("./이동하고 싶은 페이지", "_self");

const SearchSide  = (props) => {
    const toSelling = () => {
        window.open("./selling","_self");
    }

    const toZzim = () => {
        window.open("./zzim","_self");
    }

    // const toTradeRecord = () => {
    //     window.open("./traderecord","_self");
    // }

    return(
        <div>
            <ul className='searchList'>
            <li onClick={toSelling}>판매 중인 상품 </li>
            <li onClick={toZzim}>찜한 상품 </li>
            {/* <li onClick={toTradeRecord}>거래 내역 </li> */}
            </ul>
         </div>
    );
};

export default SearchSide;