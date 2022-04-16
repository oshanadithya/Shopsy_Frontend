// reactstrap components
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import validator from 'validator';

import {Button} from "reactstrap";

function ContactUS () {
    
    //adding state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();

    const [emailError, setEmailError] = useState('');

    const clickSellProducts = () => {
        history.push({
          pathname: "/sell-product",
        });
      };

    function sendData(e){
        e.preventDefault();

        const newMessage = {
            name,
            email,
            subject,
            message
        }

        axios.post("http://localhost:8070/ContactUs/addMessage", newMessage).then(()=>{
        alert("Message Sent")
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        }).catch((err)=>{
        alert(err);
        })
    }

    const validateEmail = (e) => {
        var email = e.target.value;
      
        if (validator.isEmail(email)) {
          setEmailError('Valid Email');
        } else {
          setEmailError('Enter valid Email!');
        }
      }



    return (
        <>
        
        <div className='ContactForm'>
            <div class='container'>
            <div>   
                <Button color="info" type="submit" onClick={clickSellProducts}>
                    Sell Product
                </Button> 
            </div>
            <div className ='h2' id="elem1"> Contact Us </div>
                <div className='row'>
                <div className='col-12 text-center'>
                
                    <div className='contactForm'>
                    <form id='contact-form' onSubmit={sendData}>
                        {/* Row 1 of form */}
                        <div className='row formRow'>
                        <div className='col-6'>
                            <input
                            type='text'
                            name='name'
                            className='form-control formInput'
                            placeholder='Name'
                            onChange={(e)=>{
                                setName(e.target.value);
                            }}
                            required
                            ></input>
                        </div>
                        <div className='col-6'>
                            <input
                            type='email'
                            name='email'
                            className='form-control formInput'
                            pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            placeholder='Email address'
                            onChange={(e)=>{
                                validateEmail(e);
                                setEmail(e.target.value);
                            }}
                            required
                            ></input>
                            <span style={{
                                fontWeight: 'bold',
                                color: 'red',
                                }}>{emailError}
                            </span>
                        </div>
                        </div>
                        {/* Row 2 of form */}
                        <div className='row formRow'>
                        <div className='col'>
                            <input
                            type='text'
                            name='subject'
                            className='form-control formInput'
                            placeholder='Subject'
                            onChange={(e)=>{
                                setSubject(e.target.value);
                            }}
                            required
                            ></input>
                        </div>
                        </div>
                        {/* Row 3 of form */}
                        <div className='row formRow'>
                        <div className='col'>
                            <textarea
                            rows={3}
                            name='message'
                            className='form-control formInput'
                            placeholder='Message'
                            onChange={(e)=>{
                                setMessage(e.target.value);
                            }}
                            required
                            ></textarea>
                        </div>
                        </div>
                        <Button color="info" type="submit">
                            Send
                        </Button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export {
    ContactUS
}