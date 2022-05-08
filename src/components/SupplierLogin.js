import React,{Component} from "react";
import axios from 'axios';
//import background from "../images/dima.jpg";
import {toast} from 'react-toastify';
//import profile from "./SupplierProfile";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";


export default class CusLogin extends Component {
    constructor() {
      super();
      this.userLoginSubmit = this.userLoginSubmit.bind(this)
      this.handleClose = this.handleClose.bind(this)
  
      this.state = {
        username: "",
        password: "",
        token: "",
        open: false
      }
    }
 
 
    async userLoginSubmit(e) {
      e.preventDefault()
      const userData = {
        username: this.state.username,
        password: this.state.password
      }
 
      
  
      await axios.post("http://localhost:8070/Supplier/login",userData)
      .then((res) => {
        this.setState({
          token: res.data.token
        })
        localStorage.setItem("Authorization", res.data.token)
        window.location = "/profile"
        toast.success('loging successfull',{position:toast.POSITION.TOP_CENTER});
      })
      .catch((err) => {
        console.log(err)
        this.setState({open: true})
        toast.warning('loging unsucces',{position:toast.POSITION.TOP_CENTER});
      })
    }
  
    handleClose(reason) {
      if (reason === 'clickaway') {
       return;
      }
      this.setState({open: false})
   };
 
   
 
    render() {
      
      return (

        <>
    <IndexNavbar />
    <IndexHeader />

<div style={{
                        backgroundColor: '#ACE8EF',  
                        justifyContent:'center', 
                        alignItems:'center',
                        width: '700px',
                        border: '#726D93',
                        Align: 'center',
                      }}>
                    <form onSubmit={this.userLoginSubmit} class="form1-signin1" name="form"> 
<br/><br/><br/>
                      <label class="label" for="email">Email</label>
                      <input class="form1-styling1" type="text" name="username" placeholder="Enter your Email" onChange={e => this.setState({ username: e.target.value })} required/> <br/><br/> 
                      <label class="label" for="password">Password</label> 
                      <input class="form1-styling1" type="password" name="password" placeholder="Enter your Password" onChange={e => this.setState({ password: e.target.value })} required/> 
                      <br/><br/>
                       
                      <button type="submit" class="btn-animate">Login</button> 
                      <br/><br/><br/>
                        
                    </form>
                    </div>
        <DarkFooter />
        </>

      )
    }
  }