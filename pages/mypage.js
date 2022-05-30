import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import SideNav from "../components/SideNav";
//import Zzim from "./zzim";
import Selling from "./selling";
//import TradeRecord from "./traderecord";


const MyPage = () => {
  return (
    <div className='MyPage'>
      <BrowserRouter>
        {/* <SideNav /> */}
          <Routes>
            <Route path="/" element={<MyPage />}></Route>
            <Route path="/selling" element={<Selling />}></Route>
            {/* <Route path="/zzim" element={<Zzim />}></Route>
            <Route path="/traderecord" element={<TradeRecord />}></Route> */}
          </Routes>
      </BrowserRouter>  
    </div>
  );
};

export default MyPage;