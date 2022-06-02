import React, {useState, useEffect} from 'react';
import { BrowserRouter, Link, NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css';


const SearchView  = (props) => {
    const [boards, setBoards] = useState([]);
    const {id} = useParams();
  
  useEffect(() => {
    (async function () {
      // 게시글 정보 가져오기
      const response = await axios.get("https://27.96.131.85:8443/api/boards")
        .catch((err) => {
          console.log(err);
        });
      const boards = response.data;
      
      // 게시글 정보 state에 저장
      setBoards(boards);
      console.log(response.data);
    })();
  }, []);

    return(
        <div>
            <div id='product-list'>
                {
                    boards.map(function(boards, index){
                        return (
                            <div className='product-card'>
                                <Link className='product-link' to={`/goods/${boards.id}`}>
                                    <div>
                                    {
                                    boards.boardImages[0]
                                    ? <img className="product-img" width="100" height="100"
                                      src={`https://27.96.131.85:8443/api/images/${boards?.boardImages[0]?.id}`} />
                                    : <img className="product-img" width="100" height="100" src={require("../../images/noImage.png")} />  
                                    }                                 
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