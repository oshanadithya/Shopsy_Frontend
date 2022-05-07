import React, {Component} from "react";
import axios from 'axios';
import DarkFooter from "components/Footers/DarkFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";


export default class DeliveryDetails extends Component{
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

       const id = this.props.match.params.id;

        axios.get(`/delivery/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }

    render(){

        const {customerName,
            Date,
            deliveryAddress,
            NoOfOrders,
            OrderID,
            CustomerPhone,
            driverName,
            driverPhone,
            vehicleNo,
            deliveryStatus} = this.state.post;
        return(
           
            <>
            <IndexNavbar/>
            <IndexHeader />
            
            {/* <div style={{ backgroundImage:
              "url(" + require("assets/img/header1.jpg").default + ")"}} > */}
            <div className="container">
            <div style ={{marginTop:'200px'}}>
                <h4>{customerName}</h4>
                <hr/>
                
            <d1 className="row">
                <dt className="col-sm-3" >Date</dt>
                <dd className="col-sm-9">{Date}</dd>

                <dt className="col-sm-3" >Delivery Address</dt>
                <dd className="col-sm-9">{deliveryAddress}</dd>

                <dt className="col-sm-3">No. of Orders</dt>
                <dd className="col-sm-9">{NoOfOrders}</dd>

                <dt className="col-sm-3">Order ID</dt>
                <dd className="col-sm-9">{OrderID}</dd>

                <dt className="col-sm-3">Customer Phone</dt>
                <dd className="col-sm-9">{CustomerPhone}</dd>

                <dt className="col-sm-3">Driver Name</dt>
                <dd className="col-sm-9">{driverName}</dd>

                <dt className="col-sm-3">Driver Phone</dt>
                <dd className="col-sm-9">{driverPhone}</dd> 

                <dt className="col-sm-3">Delivery Status</dt>
                <dd className="col-sm-9">{vehicleNo}</dd>  

                <dt className="col-sm-3">Vehicle Number</dt>
                <dd className="col-sm-9">{deliveryStatus}</dd>           
                         
                
                
                
                
            </d1>

            </div>

               
            </div>
            <DarkFooter />
            </>
           
           
        )
    }
}