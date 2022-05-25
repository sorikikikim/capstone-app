import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Selling from '../pages/selling';
import Buying from '../pages/buying';
import QnA from '../pages/qna';
import MyPage from '../pages/mypage';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Search from '../pages/search';

const MainPage = () => {
  return (
    <div className='MainPage'>
      <BrowserRouter>
       <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/selling" element={<Selling />}></Route>
            <Route path="/buying" element={<Buying />}></Route>
            <Route path="/qna" element={<QnA />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
			<Route path="/signup" element={<Signup />}></Route>
			<Route path="/search" element={<Search />}></Route>
		  </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainPage;