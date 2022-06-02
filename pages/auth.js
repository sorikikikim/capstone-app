import React, { useState, useEffect } from "react";
import "./auth.css";
import { Button } from "antd";
import axios from "axios";

axios.defaults.withCredentials = true;

//인증 아이디 여부 체크
//window.isAuth = false;

function Auth() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        (async function () {
            const response = await axios
                .get("https://27.96.131.85:8443/api/users")
                .catch((err) => {
                    console.log(err);
                });

            const user = response.data;
            setUser(user);
            console.log(response.data);
        })();
    }, []);

    // auth 버튼 클릭 이벤트
    const onClickAuth = () => {
        axios
            .post("https://27.96.131.85:8443/api/mail/auth")
            .then(() => console.log("send auth-mail : success"),
			alert("인증 메일 전송이 완료되었습니다. 전송된 링크를 클릭하세요."),
			window.open('/mypage', '_self'))
            .catch((error) => console.log(error));
    };

    // home 버튼 클릭 이벤트
    const onClickHome = () => {
        window.open("/", "_self");
    };

	const onClickLogout = () => {
		axios.post('https://27.96.131.85:8443/api/logout')
		.then(
			alert("로그아웃이 완료되었습니다."),
			window.open("/login", "self")
		)
		.catch((error) => console.log(error));
	}

    return (
        <div className="auth">
            <img src={require("../images/loginLogo.png")} />
            <h3>
                환영합니다 {user.nickname}님!
                <br />
                학교에서의 거래를 시작해보세요.
            </h3>
            <p>
                ※ 회원 등록 후 최초 1회의 본인 인증이 필요합니다. <br />※ 본인
                인증을 하지 않을 시 서비스 사용 권한이 제한됩니다.
            </p>
            <ul>
                <li>
                    <Button id="button1" onClick={onClickAuth}>
                        이메일 본인 인증
                    </Button>
                </li>
                <li>
                    <Button id="button2" onClick={onClickHome}>
                        홈으로 이동하기
                    </Button>
					<Button id="button3" onClick={onClickLogout} >
                        로그아웃
                    </Button>
                </li>
            </ul>
        </div>
    );
}

export default Auth;
