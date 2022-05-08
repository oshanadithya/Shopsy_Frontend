import React from "react";
import styles from "../../assets/css/ProfilePage.module.css"
import { useHistory } from "react-router";
import { ReactSession } from "react-client-session";
import { useState, useEffect } from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function Userdashboard() {

  let history = useHistory();

  const userAccountManagment = () => {
    history.push({
      pathname: "/account-managment",
    });
  };
  const handleClickBuyHistory = () => {
    history.push({
      pathname: "/user-profile",
    });
  };
  const handleClickOrderDetails = () => {
    history.push({
      pathname: "view-itineraries",
    });
  };
  const handleClickPayment = () => {
    history.push({
      pathname: "/my-complaint",
    });
  };
  const handleClickSell = () => {
    history.push({
      pathname: "/my-feedback",
    });
  };

  
  useEffect(() => {
    ReactSession.setStoreType("localStorage");
    if (ReactSession.get("user") != null) {

      document.body.classList.add("profile-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        document.body.classList.remove("profile-page");
        document.body.classList.remove("sidebar-collapse");
      };

    }
    else {
      history.push({
        pathname: "/login"
      })
    }
   
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />

        <div style = {{paddingTop : "50px"}} className = {styles.body}>
            <h3 className = {styles.header}><center>Dashboard</center></h3><br/><br/>
            

            <div style = {{paddingTop : "50px"}} className = {styles.btn_group}>
            
                <button className = {styles.btn_insurencemng} onClick = {userAccountManagment} >Account Management</button>
            
        
                <button className = {styles.btn_insurencemng} onClick = {handleClickBuyHistory} >Buy history</button>
             
    
                <button className = {styles.btn_insurencemng} onClick = {handleClickOrderDetails}>Order Details</button>
        
            
                <button className = {styles.btn_insurencemng} onClick = {handleClickPayment}>Payment Details</button>

                <button className = {styles.btn_insurencemng} onClick = {handleClickSell}>Sell products</button>
            
            </div>
        </div>
        
        <DefaultFooter />
      </div>
    </>
  );
}

export default Userdashboard;
