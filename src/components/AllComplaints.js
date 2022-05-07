import axios from "axios";
import React, {Component} from "react";
import DarkFooter from "components/Footers/DarkFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

    export default class AllComplaints extends Component{

        constructor(props){
            super(props);

            this.state={
                complaints:[]
            };
        }

        componentDidMount(){
            this.retrievePosts();
        }

        retrievePosts(){
            axios.get("/complaints").then(res =>{
                if(res.data.success){
                    this.setState({
                        complaints:res.data.existingPosts
                    });
                    console.log(this.state.complaints)
                }
            })
        }

        filterData(complaints,searchKey){
            const result = complaints.filter((complaints)=>
            complaints.complaintId.toLowerCase().includes(searchKey)
            )
            this.setState({complaints:result})
            
        }


        handleSearchArea = (e)=>{
            const searchKey =e.currentTarget.value;
            axios.get("/complaints").then(res =>{
                if(res.data.success){
                   
                    this.filterData(res.data.existingPosts,searchKey)
             } })
        }

    render(){
        return(
            <>
            <IndexNavbar/>
            <IndexHeader />
           
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
           
           
                <h4>All Complaints</h4>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Complaint ID</th>
                        <th scope="col">Email-address</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Date</th>
                        <th scope="col">Type of Complaint</th>
                        <th scope="col">Complaint</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.complaints.map((complaints,index)=>(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{complaints.customerName}</td>
                                <td>{complaints.complaintId}</td>
                                <td>{complaints.emailAddress}</td>
                                <td>{complaints.contactNo}</td>
                                <td>{complaints.Date}</td>
                                <td>{complaints.TypeOfComplaint}</td>
                                <td>{complaints.Complaint}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
            <DarkFooter />
            </>
        )
    
    }
}