import React from "react";
import "./signup.css";
import { Button, Input, Form } from "antd";

const Signup = (props) => {
    return (
        <div id="signup-container">
            <h2 id="title">회원 등록</h2>
            <Form name="upload selling">
                <Form.Item
                   label = {<div className='upload-label'>이름</div>}
				   name = "name"
				   rules={[{required: true, message: '이름을 입력하세요'}]}
                >
                    <Input
                        className="signup-name"
                        size="large"
                        placeholder="이름을 입력해주세요"
                        //value={title}
                        //onChange={handleTitle}
                    />
                </Form.Item>

                <Form.Item
                   label = {<div className='upload-label'>이메일</div>}
				   name = "email"
				   rules={[{required: true, message: '이메일을 입력하세요'}]}
                >
                    <Input
                        className="signup-email"
                        size="large"
                        placeholder="이메일을 입력해주세요"
						width="10px"
                        //value={title}
                        //onChange={handleTitle}
                    />
					<Button>인증 메일 발송</Button>
                </Form.Item>
				<Form.Item
                   label = {<div className='upload-label'>이메일</div>}
				   name = "email"
				   rules={[{required: true, message: '이메일을 입력하세요'}]}
                >
                    <Input
                        className="signup-email"
                        size="large"
                        placeholder="이메일을 입력해주세요"
						width="10px"
                        //value={title}
                        //onChange={handleTitle}
                    />
					<Button>인증 메일 발송</Button>
                </Form.Item>

                <li>
                    비밀번호
                    <Input
                        type="signPwd"
                        placeholder="내용을 입력하세요"
                        title="비밀번호등록"
                    />
                </li>
                <li>
                    이름
                    <Input
                        type="signName"
                        placeholder="내용을 입력하세요"
                        title="이름등록"
                    />
                </li>
                <li>
                    전화번호('-'제외)
                    <Input
                        type="signNumber"
                        placeholder="내용을 입력하세요"
                        title="전화번호"
                    />
                </li>
                <li>
                    <button>회원가입</button>
                </li>
            </Form>
        </div>
    );
};

export default Signup;
