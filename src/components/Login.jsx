import React,{useRef} from 'react'

import axios from 'axios';
// import lg from '../vector/default-monochrome-white.svg';
import '../App.css';
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }
const Login = () => {
  let password = useRef();
  let orphanemail = useRef();
  
const handlesubmit = ()=>{
  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let r = (Math.random() + 1).toString(36).substring(7);
  let data = JSON.stringify({
    "orphanemail":orphanemail.current.value,
    "password": password.current.value,
    
  })

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  };

  console.log(data)
  fetch('http://127.0.0.1:8000/api/users/userlogin/',requestOptions)
  .then(response => response.json())
  .then((res)=>{
    console.log(res);
    window.location.reload();
  })
  .catch(err=>{
    console.log(err);
  })
}

  const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
 <div className='fdata'>
   <FormInput name={orphanemail} type="text" description="Orphange Email" placeholder="Enter the Email of Orphanage"/>
   <FormInput name={password} type="password" description="Password" placeholder="Enter the Password"/>
   <FormButton title="Submit"/>
 </div>
);

const FormButton = props => (
<div id="button" className="submit">
  <button onClick={(e)=>handlesubmit()}>{props.title}</button>
</div>
);

const FormInput = props => (
<div className="row">
  <label className='inlab'>{props.description}</label>
  <input ref = {props.name} type={props.type} placeholder={props.placeholder}/>
</div>  
);

    return(
  
  <div>
      <body>
    <header>
        <div className="main">
            <div className="logo">
                <img src="https://phoenixsdp4.s3.amazonaws.com/vector/default-monochrome-white.svg"/>
            </div>
            <ul>
            <li><a href="/home">Home</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/aboutus">About</a></li>
                <li><a href="/donar">Donate Us</a></li>
                <li><a href="/register">Register</a></li>
                <li className="active"><a href="/login">Login</a></li>
            </ul>
        </div>
        <br/>
    </header>
    <div className="login-box">
        <div className="cont cond">
          <div className="form sign-in"> 
              <div id="loginform">
                <FormHeader title="Phoenix Login" />
                <Form />
              </div>
              </div>
          </div>
          </div>
        </body>
          </div>
    )
  }

export default Login;
