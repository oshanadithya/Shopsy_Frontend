import React from "react";
import styles from '../assets/css/signup.module.css'
import { useState, useEffect } from "react";
import axios from 'axios';

// reactstrap components
import {
  Button,
  Label,
  Form,
  Input,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import { toast } from "react-toastify";

toast.configure();

function Signup() {

    const [FirstName , setFirstName] = useState("");
    const [LastName , setLastName] = useState("");
    const [BirthDay , setBirthDay] = useState("");
    const [PhoneNo , setPhoneNo] = useState("");
    const [Email , setEmail] = useState("");
    const [Gender , setGender] = useState("");
    const [Password , setPassword] = useState("");
    const [message , setMessage] = useState("");
    const [usernameError , setError] = useState("");


function sendData(e){
    e.preventDefault();

    //checking wheather the email alreday available
    axios.get(`http://localhost:8070/users/check/${Email}`).then((res) =>{
      if (res.data === true){
        setError("Please use a different username!");
        toast.error("Username already exists!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 10000,
          hideProgressBar: false,
        });
        setEmail("");
      }
      else{

        const newUser = {
          FirstName,
          LastName,
          BirthDay,
          PhoneNo,
          Email,
          Gender,
          Password
          
          }
          axios.post("http://localhost:8070/users/add", newUser).then(()=>{
                  alert("SignUp Details Added");
                  window.location.reload();
            
                }).catch((err)=>{
                  alert(err)
                })

      }
    })

  }



  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/login_bg.jpg").default + ")",
          }}
        ></div>


                  <div style = {{paddingTop : "50px"}} className = {styles.body}>
            <br/><br/><h3 className = {styles.header} style = {{textAlign : 'center'}}>Create Account</h3><br/><br/>
            <div className = {styles.FormContainer}>
            <form onSubmit = {sendData}>

                <Label for = "firstName">First Name</Label><br/>
                <Input type = 'text' name = "firstName" placeholder = "Enter First Name" 
		              required
                onChange = {(e) => {
                  setFirstName(e.target.value);
                }}></Input><br/>

                <Label for = "LastName">Last Name</Label><br/>
                <Input type = 'text' name = "LastName" placeholder = "Enter Last name" required
                onChange = {(e) =>{
                  setLastName(e.target.value);
                }}></Input><br/>

                <Label for = "BirthDay">Date Of Birth</Label><br/>
                <Input type = 'date' name = "BirthDay" placeholder = "Enter Your Birthday"
                     required
                onChange = {(e)=>{
                  setBirthDay(e.target.value);
                }}></Input><br/>

                <Label for = "PhoneNo">Phone No</Label><br/>
                <Input type = 'text' name = "PhoneNo" placeholder = "Enter The Phone NO" pattern = "[0-9]{10}"
                title = "Enter a 10 digit phone number starting with 0" required
                onChange = {(e)=>{
                  setPhoneNo(e.target.value);
                }}></Input><br/>

                <Label for = "Email">Email Address</Label><br/>
                <Input type = 'email' name = "Email" placeholder = "Enter The Email Address" 
                title = "Enter a valid email" required
                onChange = {(e)=>{
                  setEmail(e.target.value);
                }}></Input><br/>


                <Label for = "Gender">Gender</Label><br/> 
                <Input type = "text" name = "Gender" placeholder = "Enter Gender"   required
                onChange = {(e)=>{
                  setGender(e.target.value);
                }}></Input><br/>

                <Label for = "Password">Password</Label><br/> 
                <Input type = "password" name = "Password" placeholder = "Enter The Password"   required
                onChange = {(e)=>{
                  setPassword(e.target.value);
                }}></Input><br/>

          

                <span style = {{textAlign:"left" , color : "red"}}>{message}</span>
                <Button color = "primary" type = "submit" style = {{float:'center' , margin : "5px" }}
                
                >Create Account</Button><br></br>

                <label color="black">
                Already have an account?{" "}
                <a href="/login-page">
                  <strong>Sign IN</strong>
                </a>
              </label>

            </form>    
            </div>
        </div>   
        <TransparentFooter />
      </div>
    </>
  );
}

export default Signup;
