import React from "react";
//import styles from "../assets/css/ProfilePage.module.css"
import styles from '../assets/css/signup.module.css'
import { useHistory } from "react-router";

// reactstrap components
import {
  Button,
  Form,
  Label,
  Input,
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

function Edituserform() {

  let history = useHistory();


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
            <br/><br/><h3 className = {styles.header} style = {{textAlign : 'center'}}>Create Account</h3><br/><br/>
            <div className = {styles.FormContainer}>
            <form onSubmit = {2}>

                <Label for = "firstName">First Name</Label><br/>
                <Input type = 'text' name = "firstName" value={"Chamuditha"} 
		              required
                ></Input><br/>

                <Label for = "LastName">Last Name</Label><br/>
                <Input type = 'text' name = "LastName" value={"weerasinghe"} required
                ></Input><br/>

                <Label for = "BirthDay">Date Of Birth</Label><br/>
                <Input type = 'date' name = "BirthDay" value={'02/25/2000'}
                     required
               ></Input><br/>

                <Label for = "PhoneNo">Phone No</Label><br/>
                <Input type = 'text' name = "PhoneNo" value={'0763859499'} pattern = "[0-9]{10}"
                title = "Enter a 10 digit phone number starting with 0" required
                ></Input><br/>

                <Label for = "Email">Email Address</Label><br/>
                <Input type = 'email' name = "Email" value={"chamudithawee@gmail.com"} 
                title = "Enter a valid email" required
                ></Input><br/>


                <Label for = "Gender">Gender</Label><br/> 
                <Input type = "text" name = "Gender" value={"male"}   required
                ></Input><br/>

                <Label for = "Password">Password</Label><br/> 
                <Input type = "password" name = "Password" value={"cham1234"}   required
                ></Input><br/>

          

                <span style = {{textAlign:"left" , color : "red"}}>{3}</span>
                <Button color = "primary" type = "submit" style = {{float:'center' , margin : "5px" }}
                
                >Update</Button><br></br>

            </form>    
            </div>
        </div>   
         
        <DefaultFooter />
      </div>
    </>
  );
}

export default Edituserform;
