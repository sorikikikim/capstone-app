import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../components/SearchView/index.css";
import "./zzim.css";

const Zzim = (props) => {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        (async function () {
            const response = await axios
                .get("https://27.96.131.85:8443/api/likeBoards")
                .catch((err) => {
                    console.log(err);
                });
            console.log(response);
            const boards = response.data;

            setBoards(boards);
            console.log("good" + response.data);
        })();
    }, []);

    function goToback() {
        window.open("./mypage", "_self");
    }

    return (
        <div>
            <div className="zzimTitle">내가 찜한 상품</div>

            <hr />
            <img
                src="back.png"
                id="back-button"
                onClick={goToback}
                width="50"
                height="50"
            />

            <div id="product-list2">
                {boards.map(function (boards, index) {
                    return (
                        <div className="product-card">
                            <Link
                                className="product-link"
                                to={`/goods/${boards.id}`}
                            >
                                <div>
                                    {boards.boardImages[0] ? (
                                        <img
                                            className="product-img"
                                            width="100"
                                            height="100"
                                            src={`https://27.96.131.85:8443/api/images/${boards?.boardImages[0]?.id}`}
                                        />
                                    ) : (
                                        <img
                                            className="product-img"
                                            width="100"
                                            height="100"
                                            src={require("../images/noImage.png")}
                                        />
                                    )}
                                </div>

                                <div className="product-contents">
                                    {/* <span className='product-nickname'>
                                        {boards.nickname}
                                        </span> */}
                                    <span className="product-name">
                                        {boards.goodsName}
                                    </span>
                                    <span className="product-price">
                                        {boards.price}원
                                    </span>
                                    <div className="product-seller">
                                        <span>{boards.writer}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Zzim;
