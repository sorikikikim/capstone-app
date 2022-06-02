import React, {useState, useEffect} from 'react';
import SearchSide from "../components/SearchSide";
import './mypage.css'
import axios from 'axios';

const MyPage = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await axios.get("https://27.96.131.85:8443/api/users")
        .catch((err) => {
          console.log(err);
        });
        console.log(response);

      const user = response.data;

      setUser(user);
      console.log(response.data);
    })();
  }, []);

  return (
    <div>
      <SearchSide />
      <div className="aboutMe">
        <p className='aboutMeTitle'>내 정보</p>
        <p>아이디 : {user.username}</p>
        <p>인증 이메일 : {user.email}</p>
        <p>닉네임 : {user.nickname}</p>
      </div>
    </div>
  );
};

export default MyPage;