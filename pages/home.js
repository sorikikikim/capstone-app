import React from 'react';

const Home = (props) => {
  return (
    <div>
    <div id="banner">
        <img src="bannerImg.png" width="280" height="280"/> 
        <p><span id="bannerTitle">한성대학교만의 마켓 <br />
        한성마켓<br /> </span>
        <span id="bannerText"><br />전공서적부터 가구까지, 한성인과 함께해요. <br />가깝고 따뜻한 당신의 근처를 만들어요.</span></p>
    </div>

	<div id="sale-user-ranking">
		<span className='ranking'>한성마켓 판매왕</span>
		<div className='list'>
		<img src="user.jpeg" id="book" width="80" height="80" />
		<img src="user.jpeg" id="digital" width="80" height="80" />
		<img src="user.jpeg" id="clothes" width="80" height="80" />
		<img src="user.jpeg" id="furniture" width="80" height="80" />
		<img src="user.jpeg" id="appliance" width="80" height="80" />
		</div>

	</div>
	<div id="sale-goods-ranking">
		<span className='ranking'>거래 Best 5</span>
		<div className='list'>
		<img src="book.png" id="book" width="80" height="80" />
		<img src="digital.png" id="digital" width="80" height="80" />
		<img src="clothes.png" id="clothes" width="80" height="80" />
		<img src="furniture.png" id="furniture" width="80" height="80" />
		<img src="appliance.png" id="appliance" width="80" height="80" />
		</div>
		<div className='list-name'>
			책 디지털 옷 가구 가전
		</div>
		
	</div>
</div>
  );
};

export default Home;