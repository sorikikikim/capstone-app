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
	<div id="category">
		<img src="book.png" id="book" width="60" height="60" />
		<img src="digital.png" id="digital" width="60" height="60" />
		<img src="clothes.png" id="clothes" width="60" height="60" />
		<img src="furniture.png" id="furniture" width="60" height="60" />
		<img src="appliance.png" id="appliance" width="60" height="60" />
		<img src="food.png" id="food" width="60" height="60" />
	</div>
    <div id="body">
        </div>
</div>
  );
};

export default Home;