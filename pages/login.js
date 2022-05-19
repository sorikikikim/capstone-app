import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";

axios.defaults.withCredentials = true;

const Login = (props) => {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        function urlencodeFormData(fd) {
            var s = "";
            function encode(s) {
                return encodeURIComponent(s).replace(/%20/g, "+");
            }
            for (var pair of fd.entries()) {
                if (typeof pair[1] == "string") {
                    s +=
                        (s ? "&" : "") +
                        encode(pair[0]) +
                        "=" +
                        encode(pair[1]);
                }
            }
            return s;
        }
        let form = new FormData();
        form.append("username", inputId);
        form.append("password", inputPw);

        console.log("click login");
        console.log(form.get("username"));
        axios
            .post(
                "https://27.96.131.85:8443/api/login",
                urlencodeFormData(form),
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )
            .then((response) => console.log("success"))
            .catch((error) => console.log(error));
    };

    // 페이지 렌더링 후 가장 처음 호출되는 함수

    useEffect(
        () => {},
        // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
        []
    );

    return (
        <div className="login">
            <img src={require("../images/loginLogo.png")} />
            <h3>
                안녕하세요!
                <br />
                한성대학교 학번/교직원번호로 로그인해주세요.
            </h3>
            <p>
                ※ 아이디, 비밀번호는 학교 홈페이지와 동일합니다. <br />※ 회원
                등록을 통한 본인 인증 후 이용이 가능 합니다.
            </p>
            <ul>
                <li>
                    <Input
                        type="text"
                        value={inputId}
                        onChange={handleInputId}
                        placeholder="학번 및 교직원번호"
                        title="아이디입력"
                    />
                </li>
                <li>
                    <Input
                        type="password"
                        value={inputPw}
                        onChange={handleInputPw}
                        placeholder="비밀번호"
                        title="비밀번호입력"
                    />
                </li>
                <li>
                    <Button onClick={onClickLogin}>로그인</Button>
                </li>
            </ul>

            <div id="linking">
                <ul>
                    <li>
                        <a
                            href="https://www.hansung.ac.kr/sites/hansung/index.do"
                            target="blank"
                        >
                            한성대학교 홈페이지
                        </a>
                    </li>
                    <li>
                        <Link to="/signup">회원가입</Link>
                    </li>
                    <li>
                        <a
                            href="https://info.hansung.ac.kr/jsp/infofind/infoFindView_rwd.jsp"
                            target="blank"
                        >
                            비밀번호 찾기
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Login;
