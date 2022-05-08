import React, {Component} from "react";
import axios from 'axios';
import img from "../assets/img/header1.jpg";
import DarkFooter from "components/Footers/DarkFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";




// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import "./Headers/IndexHeader.js";


export default class Home extends Component{

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

    onDelete = (id) =>{
        axios.delete(`/delivery/delete/${id}`).then((res)=>{
            alert("Do you really want to delete this?");

            this.retrievePosts();

        });


//         axios.delete('/delivery/delete/${id}')
//         .catch(function(error){
//             if(error.response)
//             {
//             console.log(error.response.data);
//             console.log(error.response.status);
//             console.log(error.response.header);

//         }else if (error.request){
//             console.log(error.request);
//         }else{
//             console.log('Error',error.message);
//         }
//     });
 }

 filterData(delivery,searchkey){

    const result = delivery.filter((post)=>
    post.OrderID.toLowerCase().includes(searchkey) ||
    post.customerName.toLowerCase().includes(searchkey)
    )
    this.setState({delivery:result})
 }

 handleSearchArea = (e)=>{
     const searchkey =e.currentTarget.value;

     axios.get("/delivery").then(res=>{
        if(res.data.success){
            this.filterData(res.data.existingPosts,searchkey)
        }

    });
 }

    // onDelete(e) {
    //     this.setState(({ id }) => ({
    //          id: id+1
    //       }),
    //       this.getData
    //     )
    //   }


    render(){
    //     <div className="page-header clear-filter" filter-color="blue" >
    //    <img src={img} alt="header1" style={{width:"100px"}}></img>
    //     </div>
        return(

            <>
            <IndexNavbar/>
            <IndexHeader />

            {/* <div style={{ backgroundImage:
              "url(" + require("assets/img/header1.jpg").default + ")"}} > */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 mt-2 mb-2">

                    </div>
                    <div className="col-lg-3 mt-2 mb-2">
                        <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        name="searchQuery"
                        onChange={this.handleSearchArea}>

                        </input>
                    </div>
                </div>

                {/* {this.state.delivery.map(delivery=>(
                    <div>
                        <p>{delivery.customerName}</p>
                        <p>{delivery.deliveryAddress}</p>
                        <p>{delivery.NoOfOrders}</p>
                        <p>{delivery.OrderID}</p>
                        <p>{delivery.CustomerPhone}</p>
                        <p>{delivery.driverName}</p>
                        <p>{delivery.driverPhone}</p>
                        <p>{delivery.vehicleNo}</p>
                        <p>{delivery.deliveryStatus}</p>
                        </div>
                ))}
                 */}

                {/* <div class="table-responsive"> */}

                    <div>
                    <h5 className=" mb-3 font-normal" style={{fontFamily:"Franklin Gothic Medium", marginTop:"5px", }}> Delivery Details</h5>
                 <table className="table table-hover" style={{ backgroundColor: "rgba(159, 199, 239, 0.4)",width:"100%",boxshadow: "-1px 5px 5px 0px rgba(0, 0, 0, 0.44)" , marginTop:"100px"}} >
                     <thead>
                         <tr>
                             <th scope="col">#</th>
                             <th scope="col" >Customer Name</th>
                             <th scope="col" >Date</th>
                             <th scope="col" >Delivery Address</th>
                             <th scope="col" >No. of Orders</th>
                             <th scope="col" >Order ID</th>
                             <th scope="col" >Customer Phone</th>
                             <th scope="col" >Driver Name</th>
                             <th scope="col" >Driver Phone</th>
                             <th scope="col" >Vehicle Number</th>
                             <th scope="col" >Delivery Status</th>
                             <th scope="col" >Action</th>
                        </tr>
                     </thead>

                     <tbody>
                         {this.state.delivery.map((delivery,index)=>(
                             <tr key={index}>
                                 <th scope="row">{index+1}</th>
                                 <td>
                                     <a href={`/delivery/${delivery._id}`} style={{textDecoration:'yellow',color:"blue"}}>
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

                                 <td>
                                 <a className="btn btn-warning" href={`/edit/${delivery._id}`} style={{ backgroundColor: "#726D93"}}>
                                         <i className="fas fa-edit" ></i>&nbsp;Edit
                                     </a>
                                     &nbsp;
                                     <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(delivery._id)}>
                                         <i className="far fa-trash-alt"></i>&nbsp;Delete
                                     </a>
                                 </td>




                             </tr>

                         ))}
                     </tbody>
                 </table>
                 {/* </div> */}

                 <p id="demo"></p>
                 <button className="btn btn-success"><a href="/add" style={{textDecoration:'none', color:'white'}} onClick="myFunction()">Create New Delivery</a></button>
                 {/* <button className="btn btn-success"><a href="/addc" style={{textDecoration:'none', color:'white'}}>Complaint</a></button> */}
            </div>
            </div>
            <DarkFooter/>


            </>
        );
    }
}
