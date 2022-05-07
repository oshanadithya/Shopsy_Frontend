import React, {Component} from "react";
import axios from 'axios';
import "assets/css/bootstrap.min.css";
import DarkFooter from "components/Footers/DarkFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";


export default class EditDelivery extends Component{

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
       const id = this.props.match.params.id;

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

   

     axios.put(`/delivery/update/${id}`,data).then((res)=>{
         if(res.data.success){
             alert("Delivery Updated Successfully")
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





    componentDidMount(){

      
         const id = this.props.match.params.id;
         axios.get(`/delivery/${id}`).then((res)=>{
             if(res.data.success){
                 this.setState({
                     customerName:res.data.post.customerName,
                     Date:res.data.post.Date,
                     deliveryAddress:res.data.post.deliveryAddress,
                     NoOfOrders:res.data.post.NoOfOrders,
                     OrderID:res.data.post.OrderID,
                     CustomerPhone:res.data.post.CustomerPhone,
                     driverName:res.data.post.driverName,
                     driverPhone:res.data.post.driverPhone,
                     vehicleNo:res.data.post.vehicleNo,
                     deliveryStatus:res.data.post.deliveryStatus

                    
                 });
 
                 console.log(this.state.post);
             }
         });
        }
    
         myFunction() {
            var checkBox = document.getElementById("myCheck");
            // Get the output text
            var button = document.getElementById("button");
          
            // If the checkbox is checked, display the output text
            if (checkBox.checked == true){
              button.style.display = "button";
            } else {
              button.style.display = "none";
            }
        }
          
        

    

    render(){
        return(
            
            <>
            <IndexNavbar/>
            <IndexHeader/>
            
            {/* <div style={{ backgroundImage:
              "url(" + require("assets/img/header1.jpg").default + ")"}} > */}
           
                <h5 className=" mb-3 font-normal" style={{fontFamily:"Franklin Gothic Medium", marginTop:"30px"}}>Update Delivery Details</h5> 
                <div className = "card col-md-6 offset-md-4 offset-md-6" style={{ 
                marginLeft:"260px", marginTop:"200px"}}>

                <form className="needs-validation" noValidate style={{ 
                marginTop:"20px", marginBottom:"1px"}}>
                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Customer Name</label>
                        </div>
                        <input type="text"
                         style={{ 
                            width:'400px'}}
                        className="form-control"
                        name="customerName"
                        placeholder="Enter Name"
                        value={this.state.customerName}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Date</label>
                        </div>
                        <input type="date"
                         style={{ 
                            width:'400px'}}
                        className="form-inline"
                        name="Date"
                        value={this.state.Date}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Delivery Address</label>
                        </div>
                        <input type="text"
                         style={{ 
                            width:'400px'}}
                        className="form-inline"
                        name="deliveryAddress"
                        placeholder="Enter Address"
                        value={this.state.deliveryAddress}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label >Orders</label>
                        </div>
                        <select id="order" name="NoOfOrders"  value={this.state.NoOfOrders}
                        onChange={this.handleInputChange}>
                        <option style={{marginBottom:'5px', width:'400px'}}> ---Choose No.of Orders--- </option>
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

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Order ID</label>
                        </div>
                        <input type="text"
                         style={{ 
                            width:'400px'}}
                        className="form-control"
                        name="OrderID"
                        placeholder="Enter Order ID" readOnly
                        value={this.state.OrderID}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Customer Phone</label>
                        </div>
                        <input type="tel"
                         style={{ 
                            width:'400px'}}
                        placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                        className="form-control"
                        name="CustomerPhone"
                        value={this.state.CustomerPhone}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Driver Name</label>
                        </div>
                        <input type="text"
                         style={{ 
                            width:'400px'}}
                        className="form-control"
                        name="driverName"
                        placeholder="Enter Driver Name"
                        value={this.state.driverName}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Driver Phone</label>
                        </div>
                        <input type="tel"
                         style={{ 
                            width:'400px'}}
                        placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                        className="form-control"
                        name="driverPhone"
                        value={this.state.driverPhone}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Vehicle Number</label>
                        </div>
                        <input type="text"
                         style={{ 
                            width:'400px'}}
                        className="form-control"
                        name="vehicleNo"
                        placeholder="Enter Driver Name"
                        value={this.state.vehicleNo}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-inline" style={{marginBottom:'15px'}}>
                    <div className="col-sm-3">
                        <label style={{marginBottom:'5px'}}>Delivery Status</label></div>
                        <select id="delivery" name="deliveryStatus"  value={this.state.deliveryStatus}
                        onChange={this.handleInputChange} required>
                        <option  style={{ 
                            width:'400px'}}> ---Choose Delivery Status--- </option>
                         <option value="Delivered Successfully">Delivered Successfully</option>
                         <option value="Delivery unsuccessfull">Delivery unsuccessfull</option>
                        
                        </select>
                      
                       
                    </div>

                    {/* <label class="switch" ><h5 style={{textAlign:'center'}}>Do you really want to update this?</h5> Yes
                    <input type="checkbox" id="myCheck" onclick="myFunction()"/>
                    <span class="slider-toggle- round"></span>
                    </label> */}
                    {/* <label class="switch" ><h5 style={{textAlign:'center'}}>Do you really want to update this?</h5></label>
                     <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked/>Yes
                    <label class="form-check-label" for="radio1"></label>
                    <input type="radio" class="form-check-input" id="radio2" name="optradio1" value="option2" marginLeft="600px" />
                    <label class="form-check-label" for="radio2" >No</label> */}
                    <label class="switch" ><h5 style={{textAlign:'center'}}>Do you really want to update this?</h5></label>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-label" for="inlineRadio1" style={{textAlign:'center'}}>Yes</label>
                    </div>

                    <div class="form-check-inline">
                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" disabled/>
                    <label class="form-check-label" for="inlineRadio2" >No</label>
                    </div>


                    
                    

                    </form>
                   <div>
                    <button className="btn btn-primary active" type="submit" id="button" style={{marginTop:'15px', disable:'none', backgroundColor:'#726D93', marginLeft:'275px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square" ></i>  
                        &nbsp;Update
                        &nbsp;
                    
                    </button> 

                    
                    &nbsp;
                    {/* <a className="btn btn-warning" href={'/edit/${posts._id}'}>
                                         <i className="fas fa-edit"></i>&nbsp;Edit
                                     </a> */}



                
                    {/* <div>
                        <p id="result"></p>
                            </div>
                            <button onClick={"clearContent()"}>clear</button> */}
                    
                    </div> 

              
              
                


                </div>
           
            <DarkFooter/>
            </>
           
        )
    }
}