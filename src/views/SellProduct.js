import React, { useState, useEffect, Component } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import validator from 'validator';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { ProductHistory } from "./ProductHistory";

// core components
import {
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";
 
function Sellproduct () {

  //added states
  const {handleSubmit, register} = useForm();
  const [isError, setIsError] = useState(false);

  const [pname, setPName] = useState("");
  const [cname, setCName] = useState("");
  const [pid, setPid] = useState("");
  const [price, setPrice] = useState("");
  const [expdate, setExpdate] = useState(new Date());
  const [mandate, setMandate] = useState(new Date());
  const [desc, setDesc] = useState("");

  const [details, setDetails] = useState("");

  let history = useHistory();

  function sendData(e){
    e.preventDefault();

    const newProduct = {
      pname,
      cname,
      pid,
      price,
      expdate,
      mandate,
      desc
    }

    console.log(newProduct);

    axios.post("http://localhost:8070/SellProduct/addProduct", newProduct).then(()=>{
        alert("Product Added")
        setPName("");
        setCName("");
        setPid("");
        setPrice("");
        setExpdate("");
        setMandate("");
        setDesc("");
        }).catch((err)=>{
        alert(err);
    })
  }

    return (
        <>
        <IndexNavbar />
        <div className="wrapper">
        <IndexHeader />
        <div className="main">
        <div className="container">
            <h3 style = {{marginLeft:"440px"}}><b>Sell Product</b></h3>
          <form  onSubmit={sendData}>
          <FormGroup>
            <Label for="Name">Product Name</Label>
            <Input type="text" name="pname" id="idPName" placeholder="Chocolate Marie" onChange={(e)=>{
              setPName(e.target.value);
            }}required/>
          </FormGroup>
          <FormGroup>
            <Label for="Email">Company Name</Label>
            <Input type="text" name="cname" id="idcname" placeholder="Malibun" onChange={(e)=>{
              setCName(e.target.value);
            }}required></Input>
          </FormGroup>
          <FormGroup>
          <Label for="date">Product ID</Label>
          <br></br>
            <Input type="text" name="pid" id="idp" placeholder="MCM001" onChange={(e)=>{
              setPid(e.target.value);
            }}required></Input>
          </FormGroup>
          <FormGroup>
          <Label for="date">Product Price (Rs)</Label>
          <br></br>
            <Input type="text" name="price" id="idprice" placeholder="300" onChange={(e)=>{
              setPrice(e.target.value);
            }}required></Input>
          </FormGroup>
          <FormGroup>
          <Label for="date">Expire Date</Label>
            <DatePicker selected={expdate} type="date" name="expdate" onChange={(date)=>{
              setExpdate(date);
            }}required/>
          </FormGroup>
          <FormGroup>
          <Label for="date">Manufacture Date</Label>``
            <DatePicker selected={mandate} type="date" name="mandate" onChange={(date)=>{
              setMandate(date);
            }}required/>
          </FormGroup>
          
          <FormGroup>
            <Label for="exampleText">Product Description</Label>
            <Input type="text" name="desc" onChange={(e)=>{
              setDesc(e.target.value);
            }} placeholder="Description" required/>
          </FormGroup>
          <Button color="primary" type="submit">
            Add
          </Button>
          </form>
        </div>
        <ProductHistory />
        </div>
        <DarkFooter />
        </div>
        </>
    )
}

export {
    Sellproduct
}