import React, { useState, useEffect } from 'react';
import axios from 'axios';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

  
   const Profile = () => {
    const [companyID, setCompanyId] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [address, setAddress] = useState("");
    const [contactNo, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productID, setProductID] = useState("");
    const [description, setDescriptionProduct] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassowrd] = useState("");
    const [confirmPass, setConPassowrd] = useState("");

   useEffect(() => {
  
      const getUserData = async () => {
         try {
            const config = {
               headers: {
                  Authorization: localStorage.getItem("Authorization")
               },
            }
            await axios.get("http://localhost:8070/Supplier/profile", config)
              .then((res) => {
                setCompanyId(res.data.Cus.companyID)
                setCompanyName(res.data.Cus.companyName)
                setAddress(res.data.Cus.address)
                setPhoneNumber(res.data.Cus.contactNo)
                setEmail(res.data.Cus.email)
                setProductCategory(res.data.Cus.productCategory)
                setProductID(res.data.Cus.productID)
                setDescriptionProduct(res.data.Cus.description)
                setUsername(res.data.Cus.username)
                setPassowrd(res.data.Cus.password)
                setConPassowrd(res.data.Cus.confirmPass)
            
              }).catch((error) => {
                console.log(error.message)
              })
         } catch (error) {
            console.log(error.message)
         }
      }
      getUserData()
   }, [])


   return (
    <>
    <IndexNavbar />
    <IndexHeader />

                      <div style={{
                        backgroundColor: '#ACE8EF',  
                        justifyContent:'center', 
                        alignItems:'center',
                        width: '1500px',
                        border: '#726D93',
                        Align: 'center',
                      }}>
                        <div>
                        <br/><br/><br/><br/><br/>
                        <br/>
                        <br/>
                        <br/>
                          <center>

                          <h2><b>Supplier Profile</b></h2>

                          <br/><br/><br/>

                            <div style={{
                               fontSize: '20px',
                          }}>


                        Company ID             : {companyID} <br/><br/>
                        Company Name           : {companyName} <br/><br/>
                        Address                : {address} <br/><br/>
                        Contact No             : {contactNo} <br/><br/>
                        Email                  : {email} <br/><br/>
                        Product Category       : {productCategory} <br/><br/>
                        Product ID             : {productID} <br/><br/>
                        Description of Product : {description} <br/><br/>
                        Username               : {username} <br/><br/>
                        Password               : {password} <br/><br/>
                        Confirm Password       : {confirmPass} <br/><br/>
                        </div></center>
                        <div class="row">
                      <div>
                      <center><button 
                      style={{backgroundColor: '#726D93',
                        color: 'white',
                        padding: '16px 12px',
                        alignItems:'center',
                        borderRadius: '12px',
                        }}  
                      
                      //onClick={UpdateProfile} 
                      target="__blank">Update Profile Details</button></center>
                      </div>
                      <br/><br/><br/>
                      <div>
                        <center><button  
                        style={{backgroundColor: '#726D93',
                        color: 'white',
                        padding: '16px 12px',
                        alignItems:'center',
                        borderRadius: '12px',
                        }} 
                        target="__blank">    Delete Account    </button></center>
                      </div>
                    </div>
                        <br/><br/><br/>
                                       
        </div>
        </div>

        <DarkFooter />
        </>
 
   )
}


export default Profile;