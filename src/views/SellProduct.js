import React, { useState, useEffect, Component } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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
 
function Sellproduct () {

  function onFileChange (e) {
    // Update the state
    this.setState({ selectedFile: e.target.files[0] });
  };

  function onFileUpload (e) {
    const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    
      // Details of the uploaded file
      console.log(this.state.selectedFile);
    
      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData);
  };

  //added states
  const {handleSubmit, register} = useForm();
  const [isError, setIsError] = useState(false);

  //adding state
  const [date, setDate] = useState(new Date());
  const [selectedFile, setSelectedFile] = useState(null);
  const [pname, setPName] = useState("");
  const [cname, setCName] = useState("");
  const [pid, setPid] = useState("");
  const [expdate, setExpdate] = useState("");
  const [mandate, setMandate] = useState("");

    return (
        <>
        <div className="container">
            <h3 style = {{marginLeft:"440px"}}><b>Sell Product</b></h3>
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
          <Input type="text" name="pid" id="idp" placeholder="MCM001" ></Input>
          </FormGroup>
          <FormGroup>
          <Label for="date">Expire Date</Label>
            <DatePicker selected={date} type="date" name="expdate"/>
          </FormGroup>
          <FormGroup>
          <Label for="date">Manufacture Date</Label>
            <DatePicker selected={date} type="date" name="mandate"/>
          </FormGroup>
          <FormGroup>
          <Label for="date">Add Product Images</Label>
          <div>
            <Input 
              type="file"
              name="file"
              value={selectedFile}
              onChange={(e) => setSelectedFile(e.target.files[0])}
            ></Input>
            <button >Add image</button>
          </div>
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