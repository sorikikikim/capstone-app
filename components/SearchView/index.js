import React, {useState, useEffect} from 'react';
import { BrowserRouter, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css';


const SearchView  = (props) => {
    const [boards, setBoards] = useState([]);
    // const [img, setImg] = document.querySelectorAll('.img');
    // const test = new URL('https://27.96.131.85:8443/api/boards')
    // const id = test.searchParams.get('id')

    useEffect(function(){
            axios
            .get("https://27.96.131.85:8443/api/boards")
            .then(function(result){
                console.log('responsed');
                console.log(result)
                const boards = result.data; 
                setBoards(boards);
            })
            .catch(function(error){
                console.error('에러 발생: ', error);
            })
             
        },[])

        // useEffect(() => {
        //     if (img) {
        //         console.log(img[0]);
        //     }
        //   }, [ img ]);    

    return(
        <div>
            <hr />
            <div id='product-list'>
                {
                    boards.map(function(boards, index){
                    
                        return (
                           
                            <div className='product-card'>
                                <Link className='product-link' to={"/goods/:id"}>
                                    <div>
                                        { <img className='product-img' src={`https://27.96.131.85:8443/api/images/${boards.boardImages[0]}.id`} /> }
                                        {console.log(boards.boardImages[0])}                      
                                    </div>
                                    <div className='product-contents'>
                                        <span className='product-name'>
                                            {boards.goodsName}
                                        </span>
                                        <span className='product-price'>
                                            {boards.price}원
                                        </span>
                                        <div className='product-seller'>
                                            <span>{boards.writer}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                           
                        )
                        
                    })
                }
            </div>
         </div>
    );
};

export default SearchView;