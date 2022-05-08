import React, {Component} from "react";
import axios from 'axios';
import DarkFooter from "components/Footers/DarkFooter.js";




import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";


export default class Report extends Component{
    

    

    constructor(props){
        super(props);

        this.state={
            delivery:[]
        };
    }

    componentDidMount(){
        this.retrievePosts();
    }

    retrievePosts(){
        axios.get("/delivery").then(res=>{
            if(res.data.success){
                this.setState({
                    delivery:res.data.existingPosts
                })
                console.log(this.state.delivery);
            }
        });
    }

    filterData(delivery,searchkey){
        const result = delivery.filter((post)=>
        post.customerName.toLowerCase().includes(searchkey) ||
        post.OrderID.toLowerCase().includes(searchkey) 
        // post.Date.toLowerCase().includes(searchkey) 
        
       
        )
        this.setState({delivery:result})
        
    }


    handleSearchArea = (e)=>{
        const searchkey =e.currentTarget.value;
        axios.get("/delivery").then(res =>{
            if(res.data.success){
               
                this.filterData(res.data.existingPosts,searchkey)
         } });
    }

    print(){
        window.print();
    }


    render(){
        return(
            <>
           
            <hr></hr>
           {/* <img src = "src/assets/shopsy.png"></img> */}
            
            <div className="row">
                    <div className="col-lg-9 mt-2 mb-2">
                    </div>
                    <div className="col-lg-3 mt-2 mb-2">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Filter by Customer Name or Order ID"
                            name = "searchQuery"
                            onChange={this.handleSearchArea}
                            >
                                

                        </input>
                        {/* <br></br>
                        <select
                        className="form-control"
                        type="search"
                        name="searchQuery"
                        onChange={this.handleSearchArea} >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>

                        </select> */}
                    </div>
                </div><div>
                    <h5 className=" mb-3 font-normal" style={{ fontFamily: "Franklin Gothic Medium", marginTop: "5px" }}> Delivery Report</h5>
                    <table className="table table-hover" style={{ backgroundColor: "rgba(159, 199, 239, 0.4)", width: "100%", boxshadow: "-1px 5px 5px 0px rgba(0, 0, 0, 0.44)", marginTop: "100px" }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Delivery Address</th>
                                <th scope="col">No. of Orders</th>
                                <th scope="col">Order ID</th>
                                <th scope="col">Customer Phone</th>
                                <th scope="col">Driver Name</th>
                                <th scope="col">Driver Phone</th>
                                <th scope="col">Vehicle Number</th>
                                <th scope="col">Delivery Status</th>

                            </tr>
                        </thead>

                        <tbody>
                            {this.state.delivery.map((delivery, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <a href={`/delivery/${delivery._id}`} style={{ textDecoration: 'yellow', color: "blue" }}>
                                            {delivery.customerName}
                                        </a>
                                    </td>
                                    <td>{delivery.Date}</td>
                                    <td>{delivery.deliveryAddress}</td>
                                    <td>{delivery.NoOfOrders}</td>
                                    <td>{delivery.OrderID}</td>
                                    <td>{delivery.CustomerPhone}</td>
                                    <td>{delivery.driverName}</td>
                                    <td>{delivery.driverPhone}</td>
                                    <td>{delivery.vehicleNo}</td>
                                    <td>{delivery.deliveryStatus}</td>






                                </tr>

                            ))}
                        </tbody>
                    </table>
                    <button className="btn btn-success" type="submit" style={{backgroundColor:'#726D93'}} onClick={this.print}>
                        Print PDF</button>
                    {/* </div> */}


                </div><DarkFooter /></>
    
        
);
}
}