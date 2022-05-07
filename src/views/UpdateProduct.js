import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css';

// core components
import {
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

function UpdateProduct({SellProduct}) {

    let history = useHistory();

    const [pname, setPName] = useState("");
    const [cname, setCName] = useState("");
    const [pid, setPid] = useState("");
    const [price, setPrice] = useState("");
    const [expdate, setExpdate] = useState(new Date());
    const [mandate, setMandate] = useState(new Date());
    const [desc, setDesc] = useState("");

    const {id} = useParams();

    useEffect (()=>{
        axios.get(`http://localhost:8070/SellProduct/getProduct/${id}`)
        .then((res)=>{
          console.log(res.data);
          setPName(res.data.pname);
          setCName(res.data.cname);
          setPid(res.data.pid);
          setPrice(res.data.price);
          setExpdate(res.data.expdate);
          setMandate(res.data.mandate);
          setDesc(res.data.desc);
    
        }).catch((err)=>{
          console.log(err);
        })
    }, []);

    function sendNewData(e){
        e.preventDefault();
        alert("Inserting New Data");
    
        const updateProduct = {
            pname,
            cname,
            pid,
            price,
            expdate,
            mandate,
            desc
        };

        axios.put(`http://localhost:8070/SellProduct/updateProduct/${id}`, updateProduct)
        .then((res)=>{
        console.log(res);
        toast.success('Product Edited!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            e.target.reset();
            history.push("/sell-product");

        }).catch((err)=>{
        alert(err);
        console.log(err);
        toast.error('Something has gone wrong!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
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
                <form  onSubmit={sendNewData}>
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
                    Update
                </Button>
                </form>
                </div>
                </div>
                <DarkFooter />
                </div>
            </>
        )

}

export {
    UpdateProduct
}