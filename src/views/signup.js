import React from "react";
import styles from '../assets/css/signup.module.css'
import { useState, useEffect  } from 'react';
import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Label,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function LoginPage() {

    const [InsurenceID , setInsurenceId] = useState("");
    const [InsurenceName , setInsurenceName] = useState("");
    const [InsurencePrice , setInsurencePrice] = useState("");
    const [InsurenceCoverage , setInsurenceCoverage] = useState("");
    const [InsurenceAccidentType , setInsurenceAccidentType] = useState("");
    const [InsurenceDetails , setInsurenceDetails] = useState("");
    const [message , setMessage] = useState("");


function sendData(e){
    e.preventDefault();

    const newInsurence = {
        InsurenceID,
        InsurenceName,
        InsurencePrice,
        InsurenceCoverage,
        InsurenceAccidentType,
        InsurenceDetails,
        
    }


axios.post("http://localhost:8070/insurences/add-package" , newInsurence ).then(()=>{
    window.location.reload();
}).catch((err)=>{
    alert(err);
    })
}


  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };


  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/login_bg.jpg").default + ")",
          }}
        ></div>

        <div>


                  <div style = {{paddingTop : "50px"}} className = {styles.body}>
            <br/><br/><h3 className = {styles.header} style = {{textAlign : 'center'}}>Insert Insurance Plan Details</h3><br/><br/>
            <div className = {styles.FormContainer}>
            <form onSubmit = {sendData}>

                <Label for = "InsurenceID">Insurance Plan ID</Label><br/>
                <Input type = 'text' name = "InsurenceID" placeholder = "Enter Plan ID" pattern="[I]{1}[P]{1}[0-9]{3}"
		               title="Invalid Insurence ID pattern! Ex:IPxxx" required
                onChange = {(e) => {
                    setInsurenceId(e.target.value);
                }}></Input><br/>

                <Label for = "InsurenceName">Insurance Plan Name</Label><br/>
                <Input type = 'text' name = "InsurenceName" placeholder = "Enter Plan Name" required
                onChange = {(e) =>{
                    setInsurenceName(e.target.value);
                }}></Input><br/>

                <Label for = "InsurencePrice">Insurance Plan Price</Label><br/>
                <Input type = 'text' name = "InsurencePrice" placeholder = "Enter The Price"  pattern="[R]{1}[s]{1}[0-9]+"
                       title="Invalid Price pattern! Ex:Rsxxxx" required
                onChange = {(e)=>{
                    setInsurencePrice(e.target.value);
                }}></Input><br/>

                <Label for = "InsurenceCoverage">Coverage</Label><br/>
                <Input type = 'text' name = "InsurenceCoverage" placeholder = "Enter The Coverage" required
                onChange = {(e)=>{
                    setInsurenceCoverage(e.target.value);
                }}></Input><br/>

                <Label for = "InsurenceAccidentType">Accident types</Label><br/>
                <Input type = 'text' name = "InsurenceAccidentType" placeholder = "Enter The Accident Types" required
                onChange = {(e)=>{
                    setInsurenceAccidentType(e.target.value);
                }}></Input><br/>


                <Label for = "InsurenceDetails">Insurance Plan Description</Label><br/> 
                <Input type = "text" name = "InsurenceDetails"  required
                onChange = {(e)=>{
                    setInsurenceDetails(e.target.value);
                }}></Input><br/>

                <span style = {{textAlign:"left" , color : "red"}}>{message}</span>
                <Button color = "primary" type = "submit" style = {{float:'right' , margin : "5px" }}
                
                >Add Plan</Button>

            </form>    
            </div>
        </div> 
        </div>  
        <TransparentFooter />
      </div>
    </>
  );
}

export default LoginPage;
