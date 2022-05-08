import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  Label,
  Input,
  form,
  FormGroup,
  Row,
  Col,
  Card,
  Alert,
  Container,
} from "reactstrap";

import styles from '../assets/css/updateUser.module.css';

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";


import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ReactSession } from "react-client-session";

toast.configure();

function updateUser() {

    const [FirstName , setFirstName] = useState("");
    const [LastName , setLastName] = useState("");
    const [BirthDay , setBirthDay] = useState("");
    const [PhoneNo , setPhoneNo] = useState("");
    const [Gender , setGender] = useState("");
    const [Password , setPassword] = useState("");

    const history = useHistory();


    function onSubmit(e) {
        e.preventDefault();
        const updates = {
            FirstName,
            LastName,
            BirthDay,
            PhoneNo,
            Gender,
           

        }

        axios.put( `http://localhost:8070/users/update/${ReactSession.get("user").Email}`, updates)
        .then(() => {
            toast.success('User Details Edited!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        
        }).catch((err) => {
            console.log(err);
            toast.error('Something has gone wrong!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,

            });
        })

       useEffect(() => {
           ReactSession.setStoreType("localStorage");
           if (ReactSession.get("user") != null) {
               setFirstName(ReactSession.get("user").FirstName);
               setLastName(ReactSession.get("user").LastName);
               setBirthDay(ReactSession.get("user").BirthDay);
               setPhoneNo(ReactSession.get("user").PhoneNo);
               setGender(ReactSession.get("user").Gender);
               
           };
       }, []);

    }

    return (
        <>
        <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        < br/>
        < br/>
            <h3 ><center>Account Details Update</center></h3><br/><br/>

            <div style = {{paddingTop : "50px"}} className = {styles.body}>
            <br/><br/><br/><br/>
            <div className = {styles.FormContainer}>
            <form onSubmit = {sendData}>

                <Label for = "firstName">First Name</Label><br/>
                <Input type = 'text' name = "firstName" placeholder = "Enter First Name"  value={FirstName}
		              required
                onChange = {(e) => {
                  setFirstName(e.target.value);
                }}></Input><br/>

                <Label for = "LastName">Last Name</Label><br/>
                <Input type = 'text' name = "LastName" value={LastName} placeholder = "Enter Last name" required
                onChange = {(e) =>{
                  setLastName(e.target.value);
                }}></Input><br/>

                <Label for = "BirthDay">Date Of Birth</Label><br/>
                <Input type = 'date' name = "BirthDay" placeholder = "Enter Your Birthday" value={Birthday}
                     required
                onChange = {(e)=>{
                  setBirthDay(e.target.value);
                }}></Input><br/>

                <Label for = "PhoneNo">Phone No</Label><br/>
                <Input type = 'text' name = "PhoneNo" placeholder = "Enter The Phone NO" pattern = "[0-9]{10}" value={PhoneNo}
                title = "Enter a 10 digit phone number starting with 0" required
                onChange = {(e)=>{
                  setPhoneNo(e.target.value);
                }}></Input><br/>

        
                <Label for = "Gender">Gender</Label><br/> 
                <Input type = "text" name = "Gender" placeholder = "Enter Gender" value={Gender}  required
                onChange = {(e)=>{
                  setGender(e.target.value);
                }}></Input><br/>

            
                <span style = {{textAlign:"left" , color : "red"}}>{message}</span>
                <Button color = "primary" type = "submit" style = {{float:'center' , margin : "5px" }}
                
                >Update Details</Button>
                </form>
            </div>
            </div> 
            
        </div>
        <DefaultFooter />
        </>
    );

}
export default updateUser;