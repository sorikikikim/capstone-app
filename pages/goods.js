import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./goods.css";

const Goods  = (props) => {
  const [boards, setBoards] = useState({});
  const [images, setImages] = useState([]);
  const {id}  = useParams();

  useEffect(() => {
    (async function () {
      const response = await axios.get(`https://27.96.131.85:8443/api/boards/${id}`, {
        withCredentials: true,
      });
      const boards = response.data;
      const images = boards.boardImages;
      console.log(response.data);

      // 게시글 정보 state에 저장
      setBoards(boards);
      setImages(images);

    })();
  }, []);

    return(
      <div id="goods">
        <div className="images_container">
          {
            images.map((images) => {
              return (
                <img className="goodsImages"
                src={`https://27.96.131.85:8443/api/images/${images.id}`} />
              )
            })
          }
        </div>
        <div className="goodsContext">  
          <div className="goodsName">
            상품 : {boards.goodsName}
          </div>

          <div className="goodsPrice">
            가격 : {boards.price} 원
          </div>

          <div className="goodsWriter">
            판매자 : {boards.writer}
          </div>
          
          <div className="goodsText">
          {boards.content}
          </div>

          <div className="goodsBtn">
            <span className="zzimBtn">
              <button class="btn btn-primary" type="submit">찜 하기</button>
            </span>
            <button class="btn btn-primary" type="submit">판매자와 대화</button>
          </div>
        </div>
      </div>





    //   <div id="product">
    //   상품명: <span className="product-name">{boards.goodsName}</span>
    //   <br />
    //   가격: <span className="product-price">{boards.price}원</span>
    //   <div className="product-seller">
    //     작성자: <span>{boards.writer}</span>
    //   </div>
    //   <div className="product-isSale">
    //     판매여부: <span>{boards.sale?.toString()}</span>
    //   </div>
    //   <div className="product-isLiked">
    //     찜 여부: <span>{boards.liked?.toString()}</span>
    //   </div>
    //   <div className="product-atCreated">
    //     작성 시간: <span>{boards.createdDateTime}</span>
    //   </div>
    //   <div className="product-atModified">
    //     수정 시간: <span>{boards.modifiedDateTime}</span>
    //   </div>
      // <div className="product-images">
      //   {
      //     images.map((images) => {
      //       return (
      //         <img className="product-img" width="100" height="100"
      //           src={`https://27.96.131.85:8443/api/images/${images.id}`} />
      //       )
      //     })
      //   }
      // </div>
    // </div>
    );
};

export default Goods;