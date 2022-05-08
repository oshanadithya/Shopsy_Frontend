import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactSession } from "react-client-session";
import styles from "../assets/css/ProfilePage.module.css";
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


import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";




function DeleteAccount() {

    let history = useHistory();
    const [Email , setEmail] = useState("");

    useEffect(() => {
        ReactSession.setStoreType("localStorage");
        if (ReactSession.get("user") != null) {
            setEmail(ReactSession.get("user").Email);
           
            
        };
    }, []);

    function onDelete(Email) {

          axios
            .delete(`http://localhost:8070/users/delete-user/${Email}`)
            .then((res) => {
              
              toast.error("Plan Deleted!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
                history.push({
                    pathname: "/login"
                });
            })
            .catch((err) => {
              console.log(err);
              alert("Error!");
              toast.error("Something Went Wrong!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
      }

return (

    <>
    <ExamplesNavbar />
  <div className="wrapper">
    <ProfilePageHeader />
    < br/>
    < br/>
       
        <card width= "100px">

            <h1>Delete Account</h1>
            <h2>Are You Sure?</h2>
            <br></br>
            <button className = {styles.btn_insurencemng} onClick = {onDelete(Email)} >Delete</button>
            
            
            <br></br><br></br>

        </card>    



    </div>
    <DefaultFooter />
    </>
);


   
}
export default DeleteAccount;