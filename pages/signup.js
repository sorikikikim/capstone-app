import React, { useState } from "react";
import "./signup.css";
import { Button, Input, Form } from "antd";
import axios from "axios";

axios.defaults.withCredentials = true;

let nicknameValid = false;
let usernameValid = false;
let submitValid = false;

function Signup() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleNickname = (e) => {
        setNickname(e.target.value);
    };

    function checkNickUsernameValid() {
        console.log(`${usernameValid}, ${nicknameValid}`);
        console.log(password);
        if (
            (nicknameValid === true && usernameValid === true) === true &&
            password.length !== 0
        ) {
            submitValid = true;
        } else {
            submitValid = false;
        }
    }

    function onClickDuplicateUser() {
        axios
            .get(
                `https://27.96.131.85:8443/api/signUp/checkUsername/${username}`
            )
            .then(function (response) {
                if (response.data === false) {
                    alert("이미 존재하는 아이디입니다.");
                    usernameValid = false;
                } else {
                    alert("사용할 수 있는 아이디입니다.");
                    usernameValid = true;
                }
                checkNickUsernameValid();
            });
    }

    function onClickDuplicateNickname() {
        axios
            .get(
                `https://27.96.131.85:8443/api/signUp/checkNickname/${nickname}`
            )
            .then(function (response) {
                if (response.data === false) {
                    alert("이미 존재하는 닉네임입니다.");
                    nicknameValid = false;
                } else {
                    alert("사용할 수 있는 닉네임입니다.");
                    nicknameValid = true;
                }
                checkNickUsernameValid();
            });
    }

    const onClickSubmit = () => {
        const json = JSON.stringify({
            email: email,
            nickname: nickname,
            password: password,
            username: username,
        });
        checkNickUsernameValid();
        if (submitValid === true) {
            axios
                .post("https://27.96.131.85:8443/api/signUp", json, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => console.log("success"))
                .catch((error) => console.log(error));
            alert("회원등록이 완료되었습니다.");
        } else {
            if (nicknameValid === false)
                alert("닉네임 중복 확인이 필요합니다.");
            else if (usernameValid === false)
                alert("아이디 중복 확인이 필요합니다.");
            else if (password.length === 0) alert("비밀번호를 입력하세요.");
        }
    };

    return (
        <div id="signup-container">
            <h2 id="title">회원 등록</h2>
            <Form name="signup-user">
                <Form.Item
                    label={<div className="signup-label">이메일</div>}
                    name="email"
                    // rules={[
                    // 	{
                    // 		required: true,
                    //         message: "한성대학교 웹메일을 통해 인증하세요",
                    //     },
                    // ]}
                >
                    {/* <p> */}
                    <Input
                        className="signup-email"
                        size="large"
                        placeholder="한성대학교 웹메일을 입력하세요"
                        id="se"
                        value={email}
                        onChange={handleEmail}
                    />
                    {/* <Button size="large" id="buttons" onClick={sendAuth}>
                        인증 메일 발송
                    </Button>
					</p>
                    <Input
                        className="signup-email"
                        size="large"
                        placeholder="인증 코드"
                        id="sec"
                        value={code}
                        onChange={handleCode}
                    />
                    <Button size="large" id="buttons" onClick={checkAuth}>
                        인증 코드 확인
                    </Button> */}
                </Form.Item>

                <Form.Item
                    label={<div className="signup-label">아이디</div>}
                    name="username"
                    // rules={[{ required: true, message: "아이디를 입력하세요" }]}
                >
                    <Input
                        className="signup-name"
                        size="large"
                        placeholder="아이디를 입력하세요"
                        id="sn"
                        value={username}
                        onChange={handleUsername}
                    />
                    <Button
                        size="large"
                        id="buttons1"
                        onClick={onClickDuplicateUser}
                    >
                        중복 확인
                    </Button>
                </Form.Item>

                <Form.Item
                    label={<div className="signup-label">비밀번호</div>}
                    name="password"
                    // rules={[
                    //     { required: true, message: "비밀번호를 입력하세요" },
                    // ]}
                >
                    <Input
                        type="password"
                        className="signup-password"
                        size="large"
                        placeholder="비밀번호를 입력하세요"
                        id="sp"
                        value={password}
                        onChange={handlePassword}
                    />
                </Form.Item>

                <Form.Item
                    label={<div className="signup-label">닉네임</div>}
                    name="nickname"
                    //rules={[{ required: true, message: "닉네임을 입력하세요" }]}
                >
                    <Input
                        className="signup-email"
                        size="large"
                        placeholder="닉네임을 입력하세요"
                        id="snn"
                        value={nickname}
                        onChange={handleNickname}
                    />
                    <Button
                        size="large"
                        id="buttons2"
                        onClick={onClickDuplicateNickname}
                    >
                        중복 확인
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Button
                        onClick={onClickSubmit}
                        type="primary"
                        id="submit-button"
                        size="large"
                        htmlType="submit"
                    >
                        회원 등록하기
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Signup;
