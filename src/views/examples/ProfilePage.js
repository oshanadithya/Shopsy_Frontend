import React from "react";
import styles from "../../assets/css/ProfilePage.module.css"
import { useHistory } from "react-router";

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

function ProfilePage() {

  let history = useHistory();


  function handleClickAccounntManagment(){
    history.push("/account-managment");
}

function handleClickBuyHistory() {
    history.push("/buy-history");
}

function handleClickOrderDetails() {
    history.push("/order-details");
}

function handleClickPayment() {
    history.push("/payment-details");
}

function handleClickSell() {
  history.push("/sell-account");
}

  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />

        <div style = {{paddingTop : "50px"}} className = {styles.body}>
            <h3 className = {styles.header}><center>Dashboard</center></h3><br/><br/>

            <div style = {{paddingTop : "50px"}} className = {styles.btn_group}>
            
                <button className = {styles.btn_insurencemng} onClick = {handleClickAccounntManagment} >Account Management</button>
            
        
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

export default ProfilePage;
