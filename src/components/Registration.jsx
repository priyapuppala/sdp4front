import React,{useRef} from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';
// import lg from '../vector/default-monochrome-white.svg';
import '../App.css';
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }
const Registration = () => {
  let username = useRef();
  let password = useRef();
  let email = useRef();
  let phone = useRef();
  let accesstype = useRef();  
  let orphanemail = useRef();
  let orphanname = useRef();
  let orphanaddress = useRef();

const handlesubmit = ()=>{
  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let r = (Math.random() + 1).toString(36).substring(7);
  let data = JSON.stringify({
    "username": username.current.value,
    "email": email.current.value,
    "phone": phone.current.value,
    "password": r,
    "access": "False",
    "orphanemail":orphanemail.current.value,
    "orphanname":orphanname.current.value,
    "orphanaddress":orphanaddress.current.value,
  })
  

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  };

  console.log(data)
  fetch('http://127.0.0.1:8000/api/users/userregister/',requestOptions)
  .then(response => response.json())
  .then((res)=>{
    console.log(res);
    // emailjs.send('service_ajbfe4v','template_gevwnud',email,'0jfWbREdZDetqUmE_HOvA')
    alert("Thank You for Registering in Phoneix. Please wait some time for the verification!!!");
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
   <FormInput name={username} description="Name" placeholder="Enter your Name" type="text" />
   <FormInput name={email} description="Email" placeholder="Enter your Email" type="email" />
   <FormInput name={phone} description="Phone" placeholder="Enter your Phone" type="text" />
   <FormInput name={password} type="hidden" value="0"/>
   <FormInput name={accesstype} type="hidden" value="False"/>
   <FormInput name={orphanname} type="text" description="Orphange Name" placeholder="Enter the Name of Orphanage"/>
   <FormInput name={orphanemail} type="text" description="Orphange Email" placeholder="Enter the Email of Orphanage"/>
   <FormInput name={orphanaddress} type="text" description="Orphange Address" placeholder="Enter the Correct Address of Orphange"/>
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
                <li className="active"><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
        <br/>
    </header>
    <div className="login-box">
        <div className="cont cond">
          <div className="form sign-in"> 
              <div id="loginform">
                <FormHeader title="Phoenix Registration" />
                <Form />
              </div>
              </div>
          </div>
          </div>
        </body>
        
          </div>
    )
  }

export default Registration;
