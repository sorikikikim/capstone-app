import React from "react";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Nav, NavLink, Bars, NavMenu } from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
    const [user, setUser] = useState([]);
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
                console.log(user);
            })();
        }
    }, []);

    return (
        <>
            <Nav>
                <Link to="/">
                    <span id="main-title">한성마켓</span>
                </Link>
                <NavLink to="/"></NavLink>
                <Bars />
                <NavMenu>
                    <FaBars />
                    <NavLink to="/." activeStyle>
                        홈
                    </NavLink>
                    <NavLink to="/sell" activeStyle>
                        상품등록
                    </NavLink>
                    <NavLink to="/search" activeStyle>
                        상품검색
                    </NavLink>
                    {user.username ? (
                        <NavLink to="/auth" activeStyle>
                            본인인증
                        </NavLink>
                    ) : (
                        <NavLink to="/login" activeStyle>
                            로그인
                        </NavLink>
                    )}
					<NavLink to="/mypage" activeStyle>
                        채팅목록
                    </NavLink>
                    <NavLink to="/mypage" activeStyle>
                        <FaUserAlt />
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
