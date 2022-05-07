// reactstrap components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import axios from "axios";
import { useHistory } from "react-router-dom";

import {Button} from "reactstrap";

function Cart() {

    //adding state
    const [qty, setQty] = useState("");
    const [date, setDate] = useState(new Date());
    const [pname, setPName] = useState("");
    const [cname, setCName] = useState("");
    const [pid, setPid] = useState("");
    const [price, setPrice] = useState("");
    const [expdate, setExpdate] = useState("");
    const [mandate, setMandate] = useState("");

    const [details, setDetails] = useState("");
    const [products, setProducts] = useState([]);

    let history = useHistory();


    useEffect(() => {
        axios.get(`http://localhost:8070/ComplaintRoute/getComplaint/`).then((res) => {
  
            console.log(res.data);
            setPName(res.data.pname);
            setCName(res.data.cname);
            setPid(res.data.pid);
            setPrice(res.data.price);
            setExpdate(res.data.expdate);
            setMandate(res.data.mandate);
  
          }).catch((err)=>{
            console.log(err);
          })
    },[]);

    useEffect(() => {
        function getProducts() {
            axios.get("http://localhost:8070/SellProduct/").then((res) => {
              setProducts(res.data);
              console.log(res);
            }).catch((err) => {
              alert("Something went wrong :(");
              alert(err.message);
            });
        };
          getProducts();
      },[]);

      var num = products.price + num;

    return (
        <>
        <IndexNavbar />
        <div className="wrapper">
        <IndexHeader />
        <div className="main">
        <section class="section-pagetop bg">
            <div class="container">
                <h2 class="title-page">Shopping cart</h2>
            </div> 
            </section>
            
            <section class="section-content padding-y">
            <div class="container">
            
            <div class="row">
                <main class="col-md-9">
            <div class="card">
            
            <table class="table table-borderless table-shopping-cart">
            <thead class="text-muted">
            <tr class="small text-uppercase">
            <th scope="col">Product Details</th>
            <th scope="col" width="120">Quantity</th>
            <th scope="col" width="120">Price</th>
            <th scope="col" class="text-right" width="200"> </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <figure class="itemside">
                        <div class="aside"><img src="assets/images/items/1.jpg" class="img-sm" /></div>
                        <figcaption class="info">
                            <a href="#" class="title text-dark" onChange={(e)=>{
                            setPName(e.target.value);
                            }}>{products.map((SellProduct) =>(<div><td>{SellProduct.pname}</td><td>{SellProduct.cname}</td><td>{SellProduct.desc}</td></div>))}</a>
                        </figcaption>
                 </figure>
                </td>
                <td> 
                    <select class="form-control">
                        <option>1</option>
                        <option>2</option>  
                        <option>3</option>  
                        <option>4</option>
                        <option>5</option>  
                    </select> 
                </td>
                <td> 
                    <div class="price-wrap"> 
                        <var class="price" ></var>
                        {products.map((SellProduct) =>(<div><td>{SellProduct.price}</td></div>))} 
                        <small class="text-muted" onChange={(e)=>{
                        setPrice(e.target.value);
                        }}> each </small> 
                    </div> 
                </td>
                <td class="text-right"> 
                <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> 
                <a href="" class="btn btn-light"> Remove</a>
                </td>
            </tr>
            
            </tbody>
            </table>
            
            <div class="card-body border-top">
                <a href="#" class="btn btn-primary float-md-right"> Make Purchase <i class="fa fa-chevron-right"></i> </a>
                <a href="#" class="btn btn-light"> <i class="fa fa-chevron-left"></i> Continue shopping </a>
            </div>  
            </div> 
            
            <div class="alert alert-success mt-3">
                <p class="icontext"><i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
            </div>
            
                </main>
                <aside class="col-md-3"> 
                    <div class="card">
                        <div class="card-body">
                                <dl class="dlist-align">
                                <dt>Total price:</dt>
                                <dd class="text-right">Rs{products.map((SellProduct) =>(<div><td>{SellProduct.num}</td></div>))}</dd>
                                </dl>
                                <dl class="dlist-align">
                                <dt>Discount:</dt>
                                <dd class="text-right">Rs 658</dd>
                                </dl>
                                <dl class="dlist-align">
                                <dt>Total:</dt>
                                <dd class="text-right  h5"><strong>Rs 1,650</strong></dd>
                                </dl>
                                <hr />
                                <p class="text-center mb-3">
                                    <img src="assets/images/misc/payments.png" height="26" />
                                </p>
                                
                        </div> 
                    </div>  
                </aside> 
            </div>
            
            </div> 
            </section>
        
            <section class="section-name bg padding-y">
            <div class="container">
            <h6>Payment and refund policy</h6>
            <p>Sample Refund policy</p>
            
            </div>
        </section>
        </div>
        <DarkFooter />
        </div>
        </>
    )
}

export {
    Cart
}