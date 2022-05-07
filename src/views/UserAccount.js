import React from "react";
import styles from "../assets/css/ProfilePage.module.css"
import { Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
    const [user, setuser] = useState();
    const [FirstName , setFirstName] = useState("");
    const [LastName , setLastName] = useState("");
    const [BirthDay , setBirthDay] = useState("");
    const [PhoneNo , setPhoneNo] = useState("");
    const [Email , setEmail] = useState("");
    const [Gender , setGender] = useState("");
    const [Password , setPassword] = useState("");
    document.documentElement.classList.remove("nav-open");

    const {id} = "chamudithawee@gmail.com";

    useEffect(()=>{

    axios.get(`http://localhost:8070/user/get_one/${id}}`).then((res) =>{

        console.log(res.data);
        setFirstName(res.data.FirstName);
        setLastName(res.data.LastName);
        setBirthDay(res.data.BirthDay); 
        setPhoneNo(res.data.PhoneNo);
        setEmail(res.set.Email);    
        setGender(res.data.Gender);



    }).catch((err)=>{
        console.log(err);
        })
    } ,[]);

    

  function handleClickEditAccount(){
    history.push("/edit-account");
}

function handleClickBuyHistory() {
    history.push("/buy-history");
}

  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
/*
    document.body.classList.add("index");
    document.getElementById("profile-card").classList.remove("card");
    document.getElementById("profile-card-blue").classList.remove("card");
    ReactSession.setStoreType("localStorage");
    if (ReactSession.get("user") === null) {
      history.push({
        pathname: "/login-page",
      });
    } else {
        setFirstName(ReactSession.get("user").FirstName);
        setLastName(ReactSession.get("user").LastName);
        setBirthDay(ReactSession.get("user").BirthDay);
        setPhoneNo(ReactSession.get("user").PhoneNo);
        setEmail(ReactSession.get("user").Email);
        setGender(ReactSession.get("user").Gender);
    }
    */

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
                      <Card
                        className="profile-card-blue"
                        id="profile-card-blue"
                      >
                    
                      </Card>
                    </td>
                    <td style={{ paddingLeft: "20px" }}>
                    <Row>
                        <Col>
                          <label>First Name : chamuditha</label>
                        </Col>
                        <Col>
                          <label>Last Name : Weerasinghe</label>
                        </Col>
                      </Row>
                      <br></br>
                      <br></br>
                      <Row>
                        <Col>
                          <label>E-Mail : chamudithawee@gmail.com</label>
                        </Col>
                        <Col>
                          <label>Mobile No. : 0763859499</label>
                        </Col>
                      </Row>
                      <br></br>
                      <br></br>
                      <Row>
                        <Col>
                          <label>Date of Birth : 02/25/2000</label>
                        </Col>
                        <Col>
                          <label>Gender : Male</label>
                        </Col>
                      </Row>
                      <br></br>
                      <br></br>

                      <Row>
                        <Col>
                          <Link to={{ pathname: "/edit-details" }}>
                            Edit Profile
                          </Link>
                        </Col>
                      </Row>
                      <br></br>
                      <br></br>
                      <Row>
                        <Col>
                          <Link to={{ pathname: "/unregister" }}>
                            Unregsiter
                          </Link>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </table>
              </Card>
            </div>

        
        </div>
        
        <DefaultFooter />
      
    </>
  );
}

export default UserAccount;
