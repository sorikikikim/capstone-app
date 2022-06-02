import { useParams } from "react-router-dom";
import React, { useState, useEffect, Fragment } from 'react';
import axios from "axios";
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import './chat.css';

//import {roomList} from "./chatRoom"

const sockJs = new SockJs(`https://27.96.131.85:8443/chat`);
const stomp = StompJs.over(sockJs);

const Chat = () => {
  const [message, setInputMessage] = useState('')
  const [info, setInfo] = useState({
    "id": null,
    "partnerNickname": null,
    "partnerId": null
  }
  )
  
  const [ready, setready] = useState(false)
  //console.log("id_partnerId: " + info.id + " - " + info.partnerId + " - " + info.partnerNickname)
  const [roomList, setroomList] = useState([]);
  const [chatMessageList, setchatMessageList] = useState([]);
  const[username, setUsername]=useState('');

  const [subData, setSubData] = useState({
    "message": null,
    "userId": null,
    "createdDateTime": null
  })

  useEffect(() => {

    console.log("현재방번호" + info.id)
    stomp.connect({}, onError);
  }, [])

  //채팅방 목록 출력
  useEffect(() => {
  //const roombutton = () => {
    axios
      .get("https://27.96.131.85:8443/api/chatRoom")
      .then(function (result) {

        const roomListData = result.data;

        console.log("hello " + roomListData);
        setroomList(roomListData);
      })
      .catch(function (error) {
        console.error('에러 발생: ', error);
      })

    console.log("hggggggggggg  ")
  //}
   },[])

   useEffect(()=>{
     axios.
     get("https://27.96.131.85:8443/api/users")
     .then(
       function(result){
         const users=result.data;
         console.log("users: " + users.username);
         setUsername(users.username)
       }
     )
   },[])

  //메세지 받기
  const subscribe = function (event) {
    console.log("@@@@@@@@@@@")
    stomp.subscribe(`/topic/${info.id}`, (chatMessage) => {
      console.log("뭐지???")
      var content = JSON.parse(chatMessage.body);
      setSubData({ ...subData, "message": content.message, "userId": content.userId, "createdDateTime": (content.createdDateTime).substring(0,10) });

      // publicChats.push(content);
      // setPublicChats([...publicChats]);
      //화면에 채팅 구현
    });
  };
  //메세지 보내기
  const SendMessage = () => {
    subscribe()
    var data = {
      chatRoomId: info.id,
      receiverId: info.partnerId,
      message: message
    }

    //채팅 보내기
    //prefix의 app과 chatcontroller @messageMapping의 chat 을 합한 경로=/app/chat
    stomp.send("/app/chat", {}, JSON.stringify(data));
    console.log(data)

    
  }


  const connectChatUser=()=>{
    
    axios.get(`https://27.96.131.85:8443/api/chatRoom`,{
       
        params :{
          id: 4,
          partnerId: 4,
          partnerNickname:"jun"
        }
      
    })

  }

  //stomp.disconnect()


  //채팅 내역 출력
  useEffect(function () {
    axios
      .get(`https://27.96.131.85:8443/api/chatRoom/${info.id}/chatMessage`)
      .then(function (result) {

        const messageList = result.data;

        setchatMessageList(messageList)
        
      })
      .catch(function (error) {
        console.error('에러 발생: ', error);
      })
  }, [info])




  //채팅연결
  // const connect = () => {

  //   console.log("hggggggggggg  ")

  //   stomp.connect({}, onConnected);
  //   //stomp.disconnect()
  // }

  // const onConnected = () => {
  //   //setUserData({...userData,"connected": true});

  //   //convertandsend의 경로와 똑같음
  //   console.log("hhhhhh  ")
  //   stomp.subscribe(`/topic/${id_partnerId.id}` , {}, function (chatMessage) {
  //     var content = JSON.parse(chatMessage.body);
  //     console.log("content:  " + content)
  //     // publicChats.push(content);
  //     // setPublicChats([...publicChats]);
  //     //화면에 채팅 구현

  //   });
  // }

  const onError = (err) => {
    console.log(err + "에러");
  }
  const handleMessage = (event) => {
    const { value } = event.target;
    setInputMessage(value);
  }
  //useEffect(()=>{},[]);

 

  //useEffect(()=>{console.log("nnnnn")},[id_partnerId.id, roomList])
  return (
    // <div>
    
    <div className="container">
      <h1 className="chatTitle">채팅방</h1>
      
      {/* <button type="button" onClick={roombutton}>but</button> */}
      <div className="chat-box">
        {/* 옆에 채팅방 목록 */}
        <div className="member-list">
          <ul>
            {roomList.map(function (roomList, index) {

              return (
                <div style={{fontSize:"20px"}} >
                  <li className="member" onClick={() => {
                    setready(true)
                    
                    setInfo({ ...info, "id": roomList.id, "partnerNickname": roomList.partnerNickname, "partnerId": roomList.partnerId });
                    
                  }} >
                    {roomList.partnerNickname}
                  </li>
                </div>

              )

            })}
          </ul>
        </div>

        {/* 채팅방 */}
        <div className="chat-content">
          <ul className="chat-messages">
            
            {chatMessageList.map(function (chatMessageList, index) {
              return (<div >
                <li className="message-data">
                 <div className="avatar" style={{fontSize :"20px"}}>
                   {/* 시간: {(chatMessageList.createdDateTime)}
                  <br/> */}
                  {chatMessageList.nickname}
                 </div>
                 <div className="message-data" style={{fontSize :"20px"}}>메시지: {chatMessageList.message}<br/><br/></div> 

                </li>
              </div>)
          })
        }
            
            {
              <li className="message-data">
                <div className="avatar" style={{fontSize :"20px"}}>  
              
                {/* 시간:{subData.createdDateTime}
               <br/> */}
                 {username}             
                </div>
                <div className="message-data" style={{fontSize :"20px", color:"blue"}}>메시지:  {subData.message} </div>
              </li>
              
            }
          </ul>
            
          {/* 채팅버튼 */}
          <div className="send-message">
            <input type="text" className="input-message" placeholder="enter the message" value={message} onChange={handleMessage} />

            <button type="button" className="send-button" style={{color:"white"}} onClick={SendMessage}>send</button>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Chat;