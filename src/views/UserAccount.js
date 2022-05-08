import React from "react";
import styles from "../assets/css/ProfilePage.module.css"
import { Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from 'axios';

// reactstrap components
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function UserAccount({}) {

    let history = useHistory();

    const handleClickPayment = () => {
      history.push({
        pathname: "/payment-details",
      });
    };
    const handleClickBuyHistory = () => {
      history.push({
        pathname: "/user-Report",
      });
    };

    const [user, setuser] = useState();
    const [FirstName , setFirstName] = useState("");
    const [LastName , setLastName] = useState("");
    const [BirthDay , setBirthDay] = useState("");
    const [PhoneNo , setPhoneNo] = useState("");
    const [Email , setEmail] = useState("");
    const [Gender , setGender] = useState("");

    
    
    useEffect(()=>{

      document.body.classList.add("profile-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;

      ReactSession.setStoreType("localstorage");
      if (ReactSession.get("user") === null) {
        history.push({
          pathname: "/login",
        });
      }

      

      else {

        setFirstName(ReactSession.get("user").FirstName);
        setLastName(ReactSession.get(("user").LastName));
        setBirthDay(ReactSession.get("user").BirthDay);
        setPhoneNo(ReactSession.get("user").PhoneNo);
        setEmail(ReactSession.get("user").Email);
        setGender(ReactSession.get("user").Gender);

      }

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
        < br/>
        < br/>
            <h3 ><center>Account Management</center></h3><br/><br/>

            <div className="user-profile-div">
              <Card className="profile-card"  id="profile-card">
                <table width="100%">
                  <tr>
                    <td
                      style={{
                        width: "35%",
                        height: "300px",
                      }}
                    >
                      <ButtonGroup vertical>
                          <Button variant="outline-primary" onClick = {handleClickPayment}>Payment Details</Button>
                          <Button variant="outline-primary" onClick = {handleClickBuyHistory} >Buy History</Button>
                      
                       </ButtonGroup>
                          
                     
                    </td>
                    <td style={{ paddingLeft: "20px" }}>
                    <Row>
                        <Col>
                          <label>First Name : {FirstName}</label>
                        </Col>
                        <Col>
                          <label>Last Name : {LastName}</label>
                        </Col>
                      </Row>
                      <br></br>
                      <br></br>
                      <Row>
                        <Col>
                          <label>E-Mail : {Email}</label>
                        </Col>
                        <Col>
                          <label>Mobile No. : {PhoneNo}</label>
                        </Col>
                      </Row>
                      <br></br>
                      <br></br>
                      <Row>
                        <Col>
                          <label>Date of Birth : {BirthDay}</label>
                        </Col>
                        <Col>
                          <label>Gender : {Gender}</label>
                        </Col>
                      </Row>
                      <br></br>
                      <br></br>

                      <Row>
                        <Col>
                          <Link to={{ pathname: "/edit-user" }}>
                            Edit Profile
                          </Link>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Link to={{ pathname: "/delete-account" }}>
                            Delete Account
                          </Link>
                        </Col>
                      </Row>
                      <br></br>
                      <br></br>
                    </td>
                  </tr>
                </table>

                <div style = {{paddingTop : "50px"}} className = {styles.btn_group}>
            
                
            
        
               
            
            </div>

              
              </Card>
            </div>

        
        </div>
        
        <DefaultFooter />
      
    </>
  );
}

export default UserAccount;
