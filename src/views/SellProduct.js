import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import validator from 'validator';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

// core components
import {
    FormGroup,
    Label,
    Input,
    Button
  } from "reactstrap";
 
function Sellproduct() {

    const {handleSubmit, register} = useForm();
    const [emailError, setEmailError] = useState('');
    const [isError, setIsError] = useState(false);

    const validateEmail = (e) => {
        var email = e.target.value;
      
        if (validator.isEmail(email)) {
          setEmailError('Valid Email');
        } else {
          setEmailError('Enter valid Email!');
        }
      }
    //adding state
    const [date, setDate] = useState(new Date());

    return (
        <>
        <div className="container">
            <h3 style = {{marginLeft:"440px"}}><b>My Complaint</b></h3>
          <form>
          <FormGroup>
            <Label for="Name">Product Name</Label>
            <Input type="text" name="pname" id="idPName" placeholder="Chocolate Marie"/>
          </FormGroup>
          <FormGroup>
            <Label for="Email">Company Name</Label>
            <Input type="text" name="cname" id="idcname" placeholder="Malibun" ></Input>
          </FormGroup>
          <FormGroup>
          <Label for="date">Product ID</Label>
          <br></br>
          <Input type="text" name="pname" id="idp" placeholder="MCM001" ></Input>
          </FormGroup>
          <FormGroup>
          <Label for="date">Expire Date</Label>
            <DatePicker selected={date}/>
          </FormGroup>
          <FormGroup>
          <Label for="date">Manufacture Date</Label>
            <DatePicker selected={date}/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Product Description</Label>
            <Input type="text" name="description" id="idpd" placeholder="Description"/>
          </FormGroup>
          <Button color="primary" type="submit">
            Submit
          </Button>
          </form>
        </div>
        </>
    )
}

export {
    Sellproduct
}