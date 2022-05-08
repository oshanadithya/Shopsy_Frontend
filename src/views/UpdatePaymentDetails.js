import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  Label,
  Input,
  form,
  Button,

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

function UpdatePaymentDetails({}) {

    const history = useHistory();

    const [CardType , setCardType] = useState("");
    const [CardNumber , setCardNumber] = useState("");
    const [CardExpDate , setCardExpDate] = useState("");
    const [CardCVC , setCardCVC] = useState("");


    function OnPaymentUpdate(e) {
        e.preventDefault();
        const updates = {
            CardType,
            CardNumber,
            CardExpDate,
            CardCVC
        }

        axios.put( `http://localhost:8070/users/update-payment/${ReactSession.get("user").Email}`, updates)
        .then(() => {
            toast.success('Payment Details Edited!', {
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
               setCardType(ReactSession.get("user").CardType);
               setCardNumber(ReactSession.get("user").CardNumber);
               setCardExpDate(ReactSession.get("user").CardExpDate);
               setCardCVC(ReactSession.get("user").CardCVC);
               
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
            <h3 ><center>Payment Details Update</center></h3><br/><br/>

            <div style = {{paddingTop : "50px"}} className = {styles.body}>
            <br/><br/><br/><br/>
            <div className = {styles.FormContainer}>
            <form onSubmit = {OnPaymentUpdate}>

                <Label for = "CardType">Card Type</Label><br/>
                <Input type = 'text' name = "CardType"   value={CardType}
		              required
                onChange = {(e) => {
                  setCardType(e.target.value);
                }}></Input><br/>

                <Label for = "CardNumber">Card Number</Label><br/>
                <Input type = 'text' name = "CardNumber" pattern = "[0-9]{16}" value={CardNumber}  required
                title = "Enter 16 digit number"
                onChange = {(e) =>{
                  setCardNumber(e.target.value);
                }}></Input><br/>

                <Label for = "CardExpDate">Card Exp Date</Label><br/>
                <Input type = 'text' name = "CardExpDate"  value={CardExpDate}
                     required
                onChange = {(e)=>{
                  setCardExpDate(e.target.value);
                }}></Input><br/>

                <Label for = "CardCVC">Card CVC</Label><br/>
                <Input type = 'text' name = "CardCVC"  pattern = "\d{3}|\d{4}" value={CardCVC}
                title = "Enter a 3 digit number or a 4 digit number" required
                onChange = {(e)=>{
                  setCardCVC(e.target.value);
                }}></Input><br/>
              
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
export default UpdatePaymentDetails;