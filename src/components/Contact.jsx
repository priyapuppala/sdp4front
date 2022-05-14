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
const Contact = () => {
  let username = useRef();
  let password1 = useRef();
  let email = useRef();
  let phone = useRef();
  let ConfirmPassword1 = useRef();

const handlesubmit = ()=>{
  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

  let data = JSON.stringify({
    "username": username.current.value,
    "email": email.current.value,
    "phone": phone.current.value,
    "subject": password1.current.value,
    "message": ConfirmPassword1.current.value,
  })

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  };

  console.log(data)
  fetch('http://127.0.0.1:8000/api/users/register/',requestOptions)
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
 <div>
   <FormInput name={username} description="Name" placeholder="Enter your Name" type="text" />
   <FormInput name={email} description="Email" placeholder="Enter your Email" type="email" />
   <FormInput name={phone} description="Phone" placeholder="Enter your Phone" type="text" />
   <FormInput name={password1} description="Subject" placeholder="Enter your Subject" type="text"/>
   <FormInput name={ConfirmPassword1} description="Message" placeholder="Enter your Message" type="textarea"/>
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
      <header>
          <div className="main">
              <div className="logo">
                  <img src="https://phoenixsdp4.s3.amazonaws.com/vector/default-monochrome-white.svg"/>
              </div>
              <ul>
  
              <li><a href="/home">Home</a></li>
                  <li><a href="/gallery">Gallery</a></li>
                  <li className="active"><a href="/contact">Contact</a></li>
                  <li><a href="/aboutus">About</a></li>
                <li><a href="/donar">Donate Us</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
          </div>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/>
          <section id="contact-section">
  <br/>
  
          <div className="container">
  
               <h2>Contact Us</h2>
               <br/>
             <p>Email us and keep upto date with our latest news</p>
            <div className="contact-form">
              <div>
                <i className="fa fa-map-marker"></i><span className="form-info">  KL University</span><br/>
                <i className="fa fa-phone" > </i><span className="form-info">  +919999999999</span><br/>
                <i className="fa fa-envelope"></i><span className="form-info">  phoenix.@gmail.com</span>
              </div>  
  
              <div id="loginform">
                <FormHeader title="Join with Us" />
                <Form />
              </div>
              </div>
          </div>
          </section>
          </header>
          </div>
    )
  }

export default Contact;
