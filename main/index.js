import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Sell from '../pages/sell';
import Selling from '../pages/selling';
import QnA from '../pages/qna';
import MyPage from '../pages/mypage';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Search from '../pages/search';
import Auth from '../pages/auth';
import Goods from '../pages/goods';
import Zzim from '../pages/zzim';
import Chatting from '../pages/chat'

const MainPage = () => {
  return (
    <div className='MainPage'>
      <BrowserRouter>
       <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sell" element={<Sell />}></Route>
            <Route path="/selling" element={<Selling />}></Route>
			<Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/qna" element={<QnA />}></Route>
			<Route path="/zzim" element={<Zzim />}></Route>
			<Route path="/search" element={<Search />}></Route>
			<Route path="/auth" element={<Auth />}></Route>
			<Route path="/goods/:id" element={<Goods />}></Route>
			<Route path="/chat" element={<Chatting />}></Route>
		  </Routes>
		  <Footer />
      </BrowserRouter>
    </div>
  )
}

export default MainPage;