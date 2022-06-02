import { Form, Divider, Input, Button, Select} from 'antd';
import React, { useState } from 'react';
import './sell.css';
import axios from 'axios';

axios.defaults.withCredentials = true;

let files = [];

function Sell() {
	const [title, setTitle] = useState('');
	const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
	const [category, setCategory] = useState(0);
	const [description, setDescription] = useState('');
	
	const selectList = ["book","digital","clothes","furniture","appliance","food"];
	
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

	const handleName = (e) => {
        setName(e.target.value)
    }
 
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

	// const handleCategory = (e) => {
    //     setCategory(e.target.value)
	// 	console.log(e.target)
	// 	console.log(e.target.value)
    // }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

	function appendFile(){
		files = document.getElementById("upload-form").files;
	}	

    const onClickSubmit = () => {
		
		let form = new FormData();
		const json = JSON.stringify({	
			"title":title,
			"goodsName":name,
			"goodsCategory":selectList[category],
			"content":description,
			"price":price
		});
		const blob = new Blob([json], {
		  type: "application/json"
		});
		form.append("board", blob);

		for (let i = 0; i < files.length; i++)
		{
			form.append('images', files[i]);
			console.log(files);
		}
		
        console.log('upload product')
		console.log(form.get('goodsName'));
		axios.post('https://27.96.131.85:8443/api/boards', form
		)
		.then(
			function isLogin() {
				console.log("register product success");
				alert("상품 등록이 완료 되었습니다.");
				window.open("./search","_self");
			}
		)
		.catch(
			function isNotLogin(error){
				console.log(error);
				alert("로그인 후 상품 등록이 가능합니다.")
				window.open("./login", "_self")
			}
		);
		 
    }

	
	

	const onSubmit = (values) => {
		console.log(values);
	}

	/*const [imageUrl, setImageUrl] = useState(null);
	const onChangeImage = (info) => {
		if (info.file.status === 'uploading') {
			return ;
		}
		if (info.file.status === 'done') {
			const response = info.file.response;
			const imageUrl = response.imageUrl;
			setImageUrl(imageUrl);
		}
 	}*/

	
	const {Option} = Select;
//<img src={require('../images/uploadImg.png')} onClick={onChangeImage}/>
	return (
		<div id='upload-container'>
			<h2 id="title">상품 등록</h2>
			<Form name="upload selling" onFinish={onSubmit}>
				<Form.Item type='file' accept='image/*' name="upload" label={<div className='upload-label'>상품 사진</div>}>
					<div id="upload-img-placeholder">
						<input type="file" id="upload-form" onChange={appendFile} multiple="multiple" />
						<span>이미지를 업로드해주세요</span>
					</div>
				</Form.Item>
				<Divider />
				<Form.Item
					label = {<div className='upload-label'>제목</div>}
					name = "title"
					rules={[{required: true, message: '제목을 입력하세요'}]}
				>
					<Input
						className="upload-title" 
						size="large" 
						placeholder='제목을 입력해주세요'
						value={title} 
						onChange={handleTitle}
					/>
				</Form.Item>
				<Divider />
				<Form.Item
					label = {<div className='upload-label'>상품 명</div>}
					name = "product"
					rules={[{required: true, message: '상품 명을 입력하세요'}]}
				>
					<Input
						className="upload-name" 
						size="large" 
						placeholder='이름을 입력해주세요'
						value={name} 
						onChange={handleName}
					/>
				</Form.Item>
				<Divider />
				<Form.Item
					label = {<div className='upload-label'>상품 가격</div>}
					name = "price"
					rules={[{required: true, message: '상품 가격을 입력하세요'}]}
				>
					<Input
					type="number"
						className="upload-price" 
						size="large" 
						placeholder='0'
						value={price} 
						onChange={handlePrice}
					/>
				</Form.Item>
				<Divider />
				<Form.Item
					name="category"
					label={<div className='upload-label'>상품 카테고리</div>}
					rules={[{required: true, message: '상품 카테고리를 고르세요'}]}
				>
					<Select
						className='upload-category'
						size='large'
						value={category}
						//onChange={handleCategory}
					>
						{selectList.map((item) => (
           				<Option value={selectList[item]} key={item}>
              				{item}
            			</Option>
          				))
						}
					
					</Select>
				</Form.Item>
				<Divider />
				<Form.Item
					name='description'
					label={<div className='upload-label'>상품 소개</div>}
					rules={[{required: true, message: '상품 소개를 입력하세요'}]}>
					<Input.TextArea
						size='large' 
						id='product-description' 
						showCount 
						maxLength={300} 
						placeholder='상품 소개를 적어주세요'
						value={description} 
						onChange={handleDescription}
					/>
				</Form.Item>
				<Form.Item>
					<Button onClick={onClickSubmit} type='primary' id="submit-button" size='large' htmlType='submit'>
						상품 등록하기
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default Sell;

