import React from 'react';
import { FaBars,FaUserAlt } from 'react-icons/fa';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './Navbar';

const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        </NavLink>
        <Bars />
        <NavMenu>
          <FaBars />
          <NavLink to='/.' activeStyle>
            홈
          </NavLink>
          <NavLink to='/selling' activeStyle>
            상품등록
          </NavLink>
          <NavLink to='/buying' activeStyle>
            상품검색
          </NavLink>
          <NavLink to='/qna' activeStyle>
            문의하기
          </NavLink>
          <NavLink to='/login' activeStyle>
            로그인
          </NavLink>
          <NavLink to='/mypage' activeStyle>
            <FaUserAlt />
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
