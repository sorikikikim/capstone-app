import React, { useState } from "react";
import "./signup.css";
import { Button, Input, Form } from "antd";
import axios from "axios";

function Signup() {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleCode = (e) => {
        setCode(e.target.value);
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

	const sendAuth = () => {
		
   
	}

	const checkAuth = () => {

	}

	const onClickOverlapUser = (name) => {
		axios.get('https://27.96.131.85:8443/api/checkUsername').then(name => {
        setUsername(name);
	});
	}

	const onClickOverlapNickname = () => {

	}

    const onClickSubmit = () => {
        let form = new FormData();
        const json = JSON.stringify({
            "email": email,
            "nickname": nickname,
            "password": password,
            "username": username,
        });
        const blob = new Blob([json], {
            type: "application/json",
        });
        form.append("signUp", blob);

        console.log(form.get("email"));
        axios
            .post("https://27.96.131.85:8443/api/signUp", form)
            .then((response) => console.log("success"))
            .catch((error) => console.log(error));
    };

    return (
        <div id="signup-container">
            <h2 id="title">회원 등록</h2>
            <Form name="signup-user">
                <Form.Item
                    label={<div className="signup-label">이메일</div>}
                    name="email"
                    rules={[
						{
							required: true,
                            message: "한성대학교 웹메일을 통해 인증하세요",
                        },
                    ]}
					>
					<p>
                    <Input
                        className="signup-email"
                        size="large"
                        placeholder="한성대학교 웹메일"
                        id="se"
                        value={email}
                        onChange={handleEmail}
                    />
                    <Button size="large" id="buttons" onClick={sendAuth}>
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
                    </Button>
				
                </Form.Item>

				<Form.Item
                    label={<div className="signup-label">닉네임</div>}
                    name="nickname"
                    rules={[{ required: true, message: "닉네임을 입력하세요" }]}
                >
                    <Input
                        className="signup-email"
                        size="large"
                        placeholder="닉네임"
                        id="snn"
                        value={nickname}
                        onChange={handleNickname}
                    />
                    <Button size="large" id="buttons" onClick={onClickOverlapNickname}>
                        중복 확인
                    </Button>
                </Form.Item>

                <Form.Item
                    label={<div className="signup-label">아이디</div>}
                    name="username"
                    rules={[{ required: true, message: "아이디를 입력하세요" }]}
                >
                    <Input
                        className="signup-name"
                        size="large"
                        placeholder="아이디"
                        id="sn"
                        value={username}
                        onChange={handleUsername}
                    />
					<Button size="large" id="buttons" onClick={onClickOverlapUser}>
                        중복 확인
                    </Button>
                </Form.Item>

                <Form.Item
                    label={<div className="signup-label">비밀번호</div>}
                    name="password"
                    rules={[
                        { required: true, message: "비밀번호를 입력하세요" },
                    ]}
                >
                    <Input
                        type="password"
                        className="signup-password"
                        size="large"
                        placeholder="비밀번호"
                        id="sp"
                        value={password}
                        onChange={handlePassword}
                    />
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
