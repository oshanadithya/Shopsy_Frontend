import React,{useState} from "react";
import axios from "axios";
//import { render } from "node-sass";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";


export default function AddSupplier(){
   
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

    const sendData = async (e) =>{
        e.preventDefault();
        
        const data = {
            companyID : companyID,
            companyName : companyName,
            address : address,
            contactNo : contactNo,
            email : email,
            productCategory : productCategory,
            productID : productID,
            description : description,
            username : username,
            password : password,
            confirmPass : confirmPass
        }

        
        if (password === confirmPass) { 
            axios.post("http://localhost:8070/Supplier/add",data)
            .then(()=>{
                alert("Registration Success")                
            }).catch((err)=>{
                alert("Customer account already exists.")
            })
            }else{
                alert("Password dismatch")
            }
    

            setCompanyId("");
            setCompanyName("");
            setAddress("");
            setPhoneNumber("");
            setEmail("");
            setProductCategory("");
            setProductID("");
            setDescriptionProduct("");
            setUsername("");
            setPassowrd("");
            setConPassowrd("");
          
        }
 


    return(
        <>
    <IndexNavbar />
    <IndexHeader />
        <div classname="Container"
            style={{
           // backgroundColor: '#ACE8EF',
            width: '100%',
            height: '100%',
            display: 'flex',  
            justifyContent:'center', 
            alignItems:'center'
          }}>

        
        <form method="post" onSubmit={sendData}>
        <div style={{
            padding: '100px',
            backgroundColor: '#ACE8EF',
            // width: '500px',
            // height: '100%',
            //display: 'flex',  
            justifyContent:'center', 
            //alignItems:'center'
          }}>

 
            <br/>
            <br/>
            <br/>

            <h2><b>Supplier Registration Form</b></h2>
            
            <br/>
            <br/>

            <div >
                <label>Company ID </label><br/>
                <input  type="text"  placeholder="Enter Company ID" style={{width:'100%', borderRadius: '15px'}}
                onChange={(e)=>setCompanyId(e.target.value)} required/>
            </div>

            <br/>

            <div >
                <label>Company name </label><br/>
                <input type="text"  placeholder="Enter Company Name" style={{width:'100%', borderRadius: '15px'}}
                onChange={(e)=>setCompanyName(e.target.value)} required/>
            </div>

            <br/>

            <div>
                <label>Address</label><br/>
                <input  type="text"  placeholder="Enter Address " style={{width:'100%', borderRadius: '15px'}}
                onChange={(e) => setAddress(e.target.value)} required/>          
            </div>

            <br/>
                       
            <div>
                <label classname="label">Contact No</label><br/>
                <input  type="text"   placeholder="Enter Phone Number" style={{width:'100%', borderRadius: '15px'}}
                onChange={(e) => setPhoneNumber(e.target.value)} pattern="[0-9]{10}" required/>
            </div>

            <br/>

            <div className="form-group mb-3">
                <label>Email </label><br/>
                    <input  type="email" 
                        placeholder="Enter your email" style={{width:'100%', borderRadius: '15px'}}
                        pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                        inputMode="email"
                        onChange={(e) => setEmail(e.target.value)} required/>
            </div>
                               
            <br/>

            <div >
                <label for="productCategory" class="form-label">Product Category </label><br/>
                <input type="text"  placeholder="Product Category" style={{width:'100%', borderRadius: '15px'}}
                onChange={(e)=>setProductCategory(e.target.value)} required/>        
            </div>

            <br/>

            <div >
                <label for="name">Product ID </label><br/>
                <input type="text"  placeholder="Product ID" style={{width:'100%', borderRadius: '15px'}}
                onChange={(e)=>setProductID(e.target.value)} required/>
            </div>

            <br/>

            <div >
                <label for="descriptionOfProduct" class="form-label">Description of Product</label><br/>
                <input type="text"  placeholder="Enter Description of product" style={{width:'100%', borderRadius: '15px'}}
                onChange={(e)=>setDescriptionProduct(e.target.value)} required/>
            </div>

            <br/>

            <div >
                <label for="username" >Username</label><br/>
                <input type="text"   placeholder="Enter username" style={{width:'100%', borderRadius: '15px'}}
                onChange={(e)=>setUsername(e.target.value)} required/>
            </div>

            <br/>

            <div>
            <label>Password</label><br/>
                <input  type="password"   placeholder="Enter Password" style={{width:'100%', borderRadius: '15px'}}
                 title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
                onChange={(e) => setPassowrd(e.target.value)} required/>
            </div>

            <br/>

            <div>
            <label>Confirm Password </label><br/>
                <input  type="password"   placeholder="Enter Password again" style={{width:'100%', borderRadius: '15px'}}
                title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
                onChange={(e) => setConPassowrd(e.target.value)}/>
            </div>

            <br/>
            <br/>

            <div>
            <button  style={{backgroundColor: '#726D93',
                        color: 'white',
                        padding: '16px 12px',
                        alignItems:'center',
                        borderRadius: '12px',
                        }} 
                type="submit" classname="btn btn-primary" >Create Account</button>
            </div>
            <br/>
            <br/>
            <br/>
            <br/> 
            </div>
            </form>
        </div>
        <DarkFooter />
        </>
            
    )
}

