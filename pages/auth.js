import React from "react";
import "./auth.css";
import { Button, Input } from "antd";
import axios from "axios";

axios.defaults.withCredentials = true;

function Auth() {

    // auth 버튼 클릭 이벤트
    const onClickAuth = () => {
        axios.post("https://27.96.131.85:8443/api/mail/auth").
			then(
				function getAuthMail(params) {
					console.log("send auth-mail : success");
					axios.get("https://27.96.131.85:8443/api/mail/auth")
					
				
				}  
			)
            .catch((error) => console.log(error));
    };

	// home 버튼 클릭 이벤트
    const onClickHome = () => {
        window.open("/","_self");
    };
   
    return (
        <div className="login">
            <img src={require("../images/loginLogo.png")} />
            <h3>
                환영합니다!
                <br />
                한성대학교 학번/교직원번호로 로그인해주세요.
            </h3>
            <p>
                ※ 회원 등록 후 최초 1회의 본인 인증이 필요합니다. <br />
				※ 본인 인증을 하지 않을 시 서비스 사용 권한이 제한됩니다.
            </p>
            <ul>
                <li>
                    <Button onClick={onClickAuth}>이메일 본인 인증</Button>
                </li>
                <li>
					<Button onClick={onClickHome}>홈으로 이동하기</Button>
                </li>
            </ul>

            
        </div>
    );
}

export default Auth;
