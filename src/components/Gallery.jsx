import React from "react";
// import lg from '../vector/default-monochrome-white.svg';
import '../App.css';
const Gallery = () => {
return (
	<div> 
<body>
    <header>
        <div class="main">
            <div class="logo">
                <img src="https://phoenixsdp4.s3.amazonaws.com/vector/default-monochrome-white.svg"/>
            </div>
            <ul>

            <li><a href="/home">Home</a></li>
                <li  class="active"><a href="/gallery">Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/aboutus">About</a></li>
                <li><a href="/donar">Donate Us</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
        <div class="container-all">
            <br>
            </br>
            <br></br>
            <br></br>
            <br></br>
            <div class="container">
            <img src="https://phoenixsdp4.s3.amazonaws.com/img3.jpg" alt=""/>
            <span class="title1">A safe place where healing begins.</span>
            {/* <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span> */}
            </div>
            <div class="container">
            <img src="https://phoenixsdp4.s3.amazonaws.com/img4.jpg" alt=""/>
            <span class="title1">Be yourself in loving others.</span>
            {/* <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span> */}
            </div>
            <div class="container">
            <img src="https://phoenixsdp4.s3.amazonaws.com/img5.jpg" alt=""/>
            <span class="title1">Don’t delay give today!</span>
            {/* <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span> */}
            </div>
            <div class="container">
            <img src="https://phoenixsdp4.s3.amazonaws.com/img6.jpg" alt=""/>
            <span class="title1">Donate, a child needs your hope.</span>
            {/* <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span> */}
            </div>
            <div class="container">
            <img src="https://phoenixsdp4.s3.amazonaws.com/img1.jpg" alt=""/>
            <span class="title1">Giving things for happiness.</span>
            {/* <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span> */}
            </div>
            <div class="container">
            <img src="https://phoenixsdp4.s3.amazonaws.com/img2.jpg" alt=""/>
            <span class="title1">Let your decision not be political, but analytical</span>
            {/* <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span> */}
            </div>
 
            </div>
    </header>
</body>

	</div>
);
};

export default Gallery;
