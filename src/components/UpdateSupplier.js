import axios from "axios";
import { Component } from "react";
//import { render } from "node-sass";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";


export default class UpdateSupplier extends Component {

    constructor(props){
    super(props);
    this.state={
        companyID : "",
        companyName : "",
        address : "",
        contactNo : "",
        email : "",
        productCategory : "",
        productID : "",
        description : "",
        username : "",
        password : "",
        confirmPass : "",
    }
          }
          
    handleInputChange = (e) =>{
        const{name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    } 
          
    onSubmit = (e) =>{
            
    e.preventDefault();
    const id = this.props.match.params.id;
          
    const {companyID, companyName, address, contactNo, email, productCategory, productID, description, username} = this.state;

    const data ={
        companyID : companyID,
        companyName : companyName,
        address : address,
        contactNo : contactNo,
        email : email,
        productCategory : productCategory,
        productID : productID,
        description : description,
        username : username
    }
          
          console.log(data)
          
          axios.put(`http://localhost:8070/Supplier/update/${id}`,data).then((res) =>{
          if(res.data.success){
            if (window.confirm('Are you sure you wish to update this Account?')) {
            alert('Supplier Updated Successfully')
            window.setTimeout(function() {
              window.location.href = '/';
            }, 2000);
          
            this.setState(
            {
                companyID : "",
                companyName : "",
                address : "",
                contactNo : "",
                email : "",
                productCategory : "",
                productID : "",
                description : "",
                username : ""
               }

              )
            }
          }
        }
    )
}
          
            componentDidMount(){
              const id = this.props.match.params.id;
          
              axios.get(`http://localhost:8070/Supplier/${id}`).then((res)=>{
              if (res.data.success){
              this.setState({

                companyID : res.data.Suppliers.companyID,
                companyName : res.data.Suppliers.companyName,
                address : res.data.Suppliers.address,
                contactNo : res.data.Suppliers.contactNo,
                email : res.data.Suppliers.email,
                productCategory : res.data.Suppliers.productCategory,
                productID : res.data.Suppliers.productID,
                description : res.data.Suppliers.description,
                username : res.data.Suppliers.username,
                

              });
              console.log(this.state.Suppliers);
          }
          });
          
          }



    render(){

        return(
            <>
        <IndexNavbar />
        <IndexHeader />
            <div 
                style={{
            // backgroundColor: '#ACE8EF',
                width: '100%',
                height: '100%',
                display: 'flex',  
                justifyContent:'center', 
                alignItems:'center'
            }}>

            
            <form >
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
                    <label>Company ID </label>
                    <input  name="companyID" style={{width:'100%', borderRadius: '15px'}}
                    value={this.state.companyID} type="text"  placeholder="Enter Company ID"
                    onChange={this.handleInputChange} required/>
                </div>

                <br/>

                <div >
                    <label>Company name </label>
                    <input name="companyName" style={{width:'100%', borderRadius: '15px'}}
                    value={this.state.companyName} type="text"  placeholder="Enter Company Name"
                    onChange={this.handleInputChange} required/>
                </div>

                <br/>

                <div>
                    <label>Address</label>
                    <input name="address" style={{width:'100%', borderRadius: '15px'}}
                    value={this.state.address} type="text"  placeholder="Enter Address "
                    onChange={this.handleInputChange} required/>          
                </div>

                <br/>
                        
                <div>
                    <label >Contact No</label>
                    <input name="contactNo" style={{width:'100%', borderRadius: '15px'}}
                    value={this.state.contactNo} type="text"   placeholder="Enter Phone Number"
                    onChange={this.handleInputChange} pattern="[0-9]{10}" required/>
                </div>

                <br/>

                <div >
                    <label>Email </label>
                        <input name="email" style={{width:'100%', borderRadius: '15px'}}
                         value={this.state.email} type="email" 
                            placeholder="Enter your email"
                            pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                            inputMode="email"
                            onChange={this.handleInputChange} required/>
                </div>
                                
                <br/>

                <div >
                    <label for="productCategory" class="form-label">Product Category </label>
                    <input name="productCategory" style={{width:'100%', borderRadius: '15px'}}
                     value={this.state.productCategory} type="text"  placeholder="Product Category"
                    onChange={this.handleInputChange} required/>        
                </div>

                <br/>

                <div >
                    <label for="name">Product ID </label>
                    <input name="productID" style={{width:'100%', borderRadius: '15px'}}
                    value={this.state.productID} type="text"  placeholder="Product ID"
                    onChange={this.handleInputChange} required/>
                </div>

                <br/>

                <div >
                    <label for="descriptionOfProduct" class="form-label">Description of Product</label>
                    <input name="description" style={{width:'100%', borderRadius: '15px'}}
                    value={this.state.description} type="text"  placeholder="Enter Description of product"
                    onChange={this.handleInputChange} required/>
                </div>

                <br/>

                <div >
                    <label for="username" >Username</label>
                    <input name="username" style={{width:'100%', borderRadius: '15px'}}
                    value={this.state.username} type="text"   placeholder="Enter username"
                    onChange={this.handleInputChange} required/>
                </div>

                <br/>

                

                <br/>
                <br/>

                <div>
                <button  style={{backgroundColor: '#726D93',
                            color: 'white',
                            padding: '16px 12px',
                            alignItems:'center',
                            borderRadius: '12px',
                            }} 
                    type="submit" classname="btn btn-primary" onClick={this.onSubmit}>Update Supplier Account</button>
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

}
