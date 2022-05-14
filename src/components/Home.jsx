import React from "react";
import '../App.css';
const Home = () => {
return (
	<div> 
<body>
    <header>
        <div class="main">
            <div class="logo">
                <img src="https://phoenixsdp4.s3.amazonaws.com/vector/default-monochrome-white.svg"/>
            </div>
            <ul>
                <li class="active"><a href="/home">Home</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/aboutus">About</a></li>
                <li><a href="/donar">Donate Us</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
        <div class="title">
            <h1>PHOENIX</h1>
            <h3>Every Child Deserves A Family</h3>
        </div>
        <div class="main-opt">
            <a href="/login" class="main-opt-btn">Get Started</a>
        </div>
    </header>
</body>

	</div>
);
};

export default Home;
