// reactstrap components
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

import {Button} from "reactstrap";

function ContactUS () {
    return (
        <>
        <div className='ContactForm'>
            <div class='container'>
            
            <div className ='h2'> Contact Us </div>
                <div className='row'>
                <div className='col-12 text-center'>
                    <div className='contactForm'>
                    <form id='contact-form' noValidate>
                        {/* Row 1 of form */}
                        <div className='row formRow'>
                        <div className='col-6'>
                            <input
                            type='text'
                            name='name'
                            className='form-control formInput'
                            placeholder='Name'
                            ></input>
                        </div>
                        <div className='col-6'>
                            <input
                            type='email'
                            name='email'
                            className='form-control formInput'
                            placeholder='Email address'
                            ></input>
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
                            ></textarea>
                        </div>
                        </div>
                        <Button className="btn-round" color="info" type="submit" outline type="button">
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