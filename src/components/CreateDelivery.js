import React, {Component} from "react";
import axios from 'axios';
import DarkFooter from "components/Footers/DarkFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

export default class CreateDelivery extends Component{

    constructor(props){
        super(props);
        this.state={
            customerName:"",
            Date:"",
            deliveryAddress:"",
            NoOfOrders:"",
            OrderID:"",
            CustomerPhone:"",
            driverName:"",
            driverPhone:"",
            vehicleNo:"",
            deliveryStatus:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

   onSubmit = (e)=>{
       e.preventDefault();

       const {customerName,Date,deliveryAddress,NoOfOrders,OrderID,CustomerPhone,driverName,driverPhone,vehicleNo,deliveryStatus} = this.state;

       const data={
        customerName:customerName,
        Date:Date,
        deliveryAddress:deliveryAddress,
        NoOfOrders:Number(NoOfOrders),
        OrderID:OrderID,
        CustomerPhone:CustomerPhone,
        driverName:driverName,
        driverPhone:driverPhone,
        vehicleNo:vehicleNo,
        deliveryStatus:deliveryStatus

     }

 
     console.log(data)

   
     if(customerName == "" ||Date == ""|| deliveryAddress == "" || NoOfOrders==""|| OrderID == "" || CustomerPhone==""|| driverName==""|| driverPhone == "" || vehicleNo==""|| deliveryStatus==""){
        alert("Fill all the Fields")
        return 0;
    }
    else if(CustomerPhone.length < 10){
        alert("Customer Contact number should be  10 Characters")
        return 0;
    }
    else if(driverPhone.length < 10){
        alert("Driver Contact number should be  10 Characters")
        return 0;
    }
    else if(OrderID.length < 4){
        alert("Order ID should be  at least 4 Characters")
        return 0;
    }
   

     axios.post("/delivery/save",data).then((res)=>{
         if(res.data.success){
             this.setState({
                customerName:"",
                Date:"",
                deliveryAddress:"",
                NoOfOrders:"",
                OrderID:"",
                CustomerPhone:"",
                driverName:"",
                driverPhone:"",
                vehicleNo:"",
                deliveryStatus:""
             });
         }
     });
   }

     clearContent(){
        document.getElementById('result').innerHTML = '';
    }
    

    render(){
       
        return(

            <>
            <IndexNavbar/>
            <IndexHeader />
            
            {/* <div style={{ backgroundImage:
              "url(" + require("assets/img/header1.jpg").default + ")", width:"100%"}} > */}
            <div>  <h5 className=" mb-3 font-normal" style={{fontFamily:"Franklin Gothic Medium", marginTop:"30px"}}>Add New Delivery Details</h5> 
            <div className = "card col-md-6 offset-md-4 offset-md-6" style={{ 
                marginLeft:"260px", marginTop:"150px"}}>
              
                <form className="form" id="myForm"  style={{ 
                     marginTop:"20px", marginBottom:"1px"}}>
                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label  style={{marginBottom:'5px'}}>Customer Name : </label>
                        </div>
                        <input type="text"
                        style={{width:'400px'}}
                        className="form-control"
                        name="customerName"
                        placeholder="Enter Name"
                        value={this.state.customerName}
                        onChange={this.handleInputChange} required/>
                    </div>

                    <br></br>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Date: </label>
                        </div>
                        <input type="date"
                        style={{width:'400px'}}
                        className="form-control"
                        name="Date"
                       
                        value={this.state.Date}
                        onChange={this.handleInputChange} required/>
                    </div>
                    <br></br>


                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Delivery Address: </label>
                        </div>
                        <input type="text"
                        style={{width:'400px'}}
                        className="form-control"
                        name="deliveryAddress"
                        placeholder="Enter Address"
                        value={this.state.deliveryAddress}
                        onChange={this.handleInputChange} required/>
                    </div>
                    <br></br>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Orders : </label>
                        </div>
                        <select id="order" name="NoOfOrders"  value={this.state.NoOfOrders}
                        onChange={this.handleInputChange} required>
                        <option  style={{ 
                            width:'400px'}}> ---Choose No.of Orders--- </option>
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="3">3</option>
                         <option value="4">4</option>
                         <option value="5">5</option>
                         <option value="10">10</option>
                         <option value="20">20</option>
                         <option value="30">30</option>
                         <option value="40">40</option>
                         <option value="50">50</option>
                         <option value="100">100</option>
                        </select>
                    </div>
                    <br></br>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Order ID : </label>
                        </div>
                        <input type="text"
                        style={{width:'400px'}}
                        className="form-control"
                        name="OrderID"
                        placeholder="Enter Order ID"
                        value={this.state.OrderID}
                        onChange={this.handleInputChange} required/>
                    </div>
                    <br></br>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Customer Phone: </label>
                        </div>
                        <input type="tel"
                        style={{width:'400px'}}
                        placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                        className="form-control"
                        name="CustomerPhone"
                        value={this.state.CustomerPhone}
                        onChange={this.handleInputChange} />
                    </div>
                    <br></br>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Driver Name : </label>
                        </div>
                        <input type="text"
                        style={{width:'400px'}}
                        className="form-control"
                        name="driverName"
                        placeholder="Enter Driver Name"
                        value={this.state.driverName}
                        onChange={this.handleInputChange} required/>
                    </div>
                    <br></br>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Driver Phone : </label>
                        </div>
                        <input type="tel"
                        style={{width:'400px'}}
                        placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                        className="form-control"
                        name="driverPhone"
                        value={this.state.driverPhone}
                        onChange={this.handleInputChange} />
                    </div>
                    <br></br>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Vehicle Number : </label>
                        </div>
                        <input type="text"
                        style={{width:'400px'}}
                        className="form-control"
                        name="vehicleNo"
                        placeholder="Enter Vehicle Number"
                        value={this.state.vehicleNo}
                        onChange={this.handleInputChange} required/>
                    </div>
                    <br></br>
                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Delivery Status : </label>
                        </div>
                        <select id="delivery" name="deliveryStatus"  value={this.state.deliveryStatus}
                        onChange={this.handleInputChange} required>
                        <option  style={{ 
                            width:'400px'}}> ---Choose Delivery Status--- </option>
                         <option value="Delivered Successfully">Delivered Successfully</option>
                         <option value="Delivery unsuccessfull">Delivery unsuccessfull</option>
                        
                        </select>
                    </div>
                   

                    <div>
                    <button className="btn btn-success" type="submit" style={{marginLeft:'800px',marginTop:'-600px',backgroundColor:'#726D93', height:'100px'}} onClick={this.onSubmit}>
                       
                        &nbsp;Add and Clear
                     
                    
                    </button> 
                   
                    
               
                    {/* <a className="btn btn-warning" href={`/edit/${delivery._id}`}>
                                         <i className="fas fa-edit"></i>&nbsp;Edit
                                     </a> */}



                
                    {/* <div>
                        <p id="result"></p>
                            </div>  */}
                    
                            {/* <button className="btn " style={{marginTop:'-800px',marginLeft:'900px', backgroundColor: "#726D93"}} onClick={"clearContent()"} >Clear</button> */}
                    
                           
                            </div>
                            </form>

               
              
                


            </div>
            </div>
            
            <DarkFooter />
          
           </>
        )
        
    }
}