import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./goods.css";
import { Button, Select } from "antd";

const Goods = (props) => {
    const [boards, setBoards] = useState({});
    const [images, setImages] = useState([]);
    const [user, setUser] = useState([]);
    const { id } = useParams();
    const [isWishAdd, setIsWishAdd] = useState(false);
    const [wishCount, setWishCount] = useState(0);
    const onSale = ["판매 중", "판매 완료"];

    const wishAddHandler = () => {
        setIsWishAdd(!isWishAdd);
    };

    const wishCountHandler = () => {
        wishAddHandler();
        if (!isWishAdd) {
            setWishCount(wishCount + 1);
            fetch(`https://27.96.131.85:8443/api/likeBoards/${boards.id}`, {
                credentials: "include",
                method: "POST",
                body: JSON.stringify({
                    liked: true,
                }),
            });
            alert("찜 목록에 추가되었습니다.");
            console.log(boards);
            console.log("count+1");
        } else if (isWishAdd) {
            setWishCount(wishCount - 1);
            fetch(`https://27.96.131.85:8443/api/likeBoards/${boards.id}`, {
                credentials: "include",
                method: "DELETE",
                body: JSON.stringify({
                    liked: false,
                }),
            });
            alert("찜 목록에서 삭제되었습니다.");
            console.log(boards);
            console.log("count-1");
        }
    };

    const connectChatUser = () => {
        axios
            .get(
                `https://27.96.131.85:8443/api/chatRoom?receiverId=${boards.writerId}`
            )
			.catch((error) => console.log(error))
            .then(window.open('/chat', '_self'))
    };

    function deleteGoods() {
        axios
            .delete(`https://27.96.131.85:8443/api/boards/${boards.id}`)
            .catch(function isNotDeleted(error) {
                console.log(error);
            })
            .then(function isDelted() {
                console.log("delete product success");
                alert("상품 삭제가 완료 되었습니다.");
                window.open("/search", "_self");
            });
    }

    useEffect(() => {
        (async function () {
            const response = await axios.get(
                `https://27.96.131.85:8443/api/boards/${id}`,
                {
                    withCredentials: true,
                }
            );
            const boards = response.data;
            const images = boards.boardImages;
            console.log(response.data);

            // 게시글 정보 state에 저장
            setBoards(boards);
            setImages(images);
        })();
    }, []);

    useEffect(() => {
        {
            (async function () {
                const response = await axios.get(
                    "https://27.96.131.85:8443/api/users"
                );
                const user = response.data;
                console.log(response.data);

                // 사용자 정보 state에 저장
                setUser(user);
            })();
        }
    }, []);

    return (
        <div id="goods">
            <p id="title">상품 정보</p>
            <div className="images_container">
                {images.map((images) => {
                    return (
                        <img
                            className="goodsImages"
                            src={`https://27.96.131.85:8443/api/images/${images.id}`}
                        />
                    );
                })}
            </div>

            <div className="goodsContext">
                <div className="goodsBoardTitle">{boards.title}</div>

                <div className="goodsLabel">상품 : {boards.goodsName}</div>

                <div className="goodsLabel">가격 : {boards.price} 원</div>

                <div className="goodsLabel">판매자 : {boards.writer}</div>

                <p className="goodsLabel">
                    상품 설명 <div className="goodsText"> {boards.content}</div>
                </p>

                <div className="goodsBtn">
                    <span className="zzimBtn">
                        {user.username === boards.writer ? (
                            <Select
                                className="upload-category"
                                placeholder="판매 여부"
                            >
                                {onSale.map((item) => (
                                    <option value={onSale[item]} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </Select>
                        ) : (
                            <Button
                                class="btn btn-primary"
                                type="submit"
                                onClick={wishCountHandler}
                            >
                                찜 하기
                            </Button>
                        )}
                    </span>
                    {console.log(user.username)}
                    {console.log(boards.writer)}
                    {user.username === boards.writer ? (
                        <Button
                            className="btn btn-primary"
                            onClick={deleteGoods}
                        >
                            게시글 삭제
                        </Button>
                    ) : (
                        <Button
                            class="btn btn-primary"
                            type="submit"
                            onClick={connectChatUser}
                        >
                            판매자와 대화
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Goods;
