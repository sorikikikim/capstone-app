import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
    //데이터 없어서 아무것도 안 읽혀짐
    const [saleUser, setSaleUser] = useState([]);
    const [saleGoods, setSaleGoods] = useState([]);
    const [likeGoods, setLikeGoods] = useState([]);
    useEffect(() => {
        (async function () {
            const response = await axios
                .get("https://27.96.131.85:8443/api/saleUser")
                .catch((err) => {
                    console.log(err);
                });

            const saleUser = response.data;
            setSaleUser(saleUser);
            console.log(response.data);
        })();
    }, []);

    useEffect(() => {
        (async function () {
            const response = await axios
                .get("https://27.96.131.85:8443/api/saleGoods")
                .catch((err) => {
                    console.log(err);
                });

            const saleGoods = response.data;
            setSaleGoods(saleGoods);
            console.log(response.data);
        })();
    }, []);

    useEffect(() => {
        (async function () {
            const response = await axios
                .get("https://27.96.131.85:8443/api/likeGoods")
                .catch((err) => {
                    console.log(err);
                });

            const likeGoods = response.data;
            setLikeGoods(likeGoods);
            console.log(response.data);
        })();
    }, []);

    return (
        <div>
            <div id="banner">
                <img src="bannerImg.png" width="280" height="280" />
                <p>
                    <span id="bannerTitle">
                        한성대학교만의 마켓 <br />
                        한성마켓
                        <br />{" "}
                    </span>
                    <span id="bannerText">
                        <br />
                        전공서적부터 가구까지, 한성인과 함께해요. <br />
                        가깝고 따뜻한 당신의 근처를 만들어요.
                    </span>
                </p>
            </div>

            <div id="ranking-array">
                <div id="ranking">
                    <span className="ranking-label">판매왕 Best</span>
                    <div className="list">
                        <div>
                            <img src="user.jpeg" className="ranking-imgs" />
                            {/*saleUser[0].id*/}
                            <p className="ranking-content">
                                1등 : {saleUser[0]}
                            </p>
                        </div>
                        <div>
                            <img src="user.jpeg" className="ranking-imgs" />
                            <p className="ranking-content">2등 : ㅇㅇㅇ</p>
                        </div>
                        <div>
                            <img src="user.jpeg" className="ranking-imgs" />
                            <p className="ranking-content">3등 : ㅇㅇㅇ</p>
                        </div>
                        <div>
                            <img src="user.jpeg" className="ranking-imgs" />
                            <p className="ranking-content">4등 : ㅇㅇㅇ</p>
                        </div>
                        <div>
                            <img src="user.jpeg" className="ranking-imgs" />
                            <p className="ranking-content">5등 : ㅇㅇㅇ</p>
                        </div>
                    </div>
                </div>

                <div id="ranking">
                    <span className="ranking-label">판매 Best 5</span>
                    <div className="list">
                        <div>
                            <img src="book.png" className="ranking-imgs" />
                            <p className="ranking-content">
                                1등 : {saleGoods[0]}
                            </p>
                        </div>
                        <div>
                            <img src="clothes.png" className="ranking-imgs" />
                            <p className="ranking-content">
                                2등 : {saleGoods[1]}
                            </p>
                        </div>
                        <div>
                            <img src="food.png" className="ranking-imgs" />
                            <p className="ranking-content">
                                3등 : {saleGoods[2]}
                            </p>
                        </div>
                        <div>
                            <img src="furniture.png" className="ranking-imgs" />
                            <p className="ranking-content">
                                4등 : {saleGoods[3]}
                            </p>
                        </div>
                        <div>
                            <img src="digital.png" className="ranking-imgs" />
                            <p className="ranking-content">
                                5등 : {saleGoods[4]}
                            </p>
                        </div>
                    </div>
                </div>

                <div id="ranking">
                    <span className="ranking-label">찜 Best 5</span>
                    <div className="list">
                        <div>
                            <img src="book.png" className="ranking-imgs" />
                            <p className="ranking-content">
                                1등 : {likeGoods[0]}
                            </p>
                        </div>
                        <div>
                            <img src="clothes.png" className="ranking-imgs" />
                            <p className="ranking-content">
                                2등 : {likeGoods[1]}
                            </p>
                        </div>
                        <div>
                            <img src="food.png" className="ranking-imgs" />
                            <p className="ranking-content">
                                3등 : {likeGoods[2]}
                            </p>
                        </div>
                        <div>
                            <img src="furniture.png" className="ranking-imgs" />
                            <p className="ranking-content">
                                4등 : {likeGoods[3]}
                            </p>
                        </div>
                        <div>
                            <img src="digital.png" className="ranking-imgs" />
                            <p className="ranking-content">
                                5등 : {likeGoods[4]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
