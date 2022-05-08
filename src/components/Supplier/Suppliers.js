import React from "react";
import { Component } from 'react';
import axios from "axios";
import { saveAs } from 'file-saver';


//import SearchSharpIcon from '@material-ui/icons/SearchSharp';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";



export default class Suppliers extends Component {

    constructor(props){
    super(props);
    
    this.generateReport = this.generateReport.bind(this);
    
    this.state={
        supplier:[],
      }
  }
  
//All data retrieve 
displaysupplier(){
    axios.get(`http://localhost:8070/Supplier`).then(res =>{
        if(res.data.success){
            this.setState({
                supplier:res.data.supplier
            });   
        }
        console.log(this.state.supplier)
    })
}

//Delete Data
onDelete = (id) =>{
    if (window.confirm('Are you sure you wish to remove this member?')) {
        axios.delete(`http://localhost:8070/Supplier/delete/${id}`).then((res)=>{
                alert('Removed successfully');
                window.location.reload();
        })
    }
}    

    filterData(supplier, searchKey) {

        const result = supplier.filter((supplier) =>
        supplier.companyID.includes(searchKey) ||
        supplier.companyName.includes(searchKey)||
        supplier.username.includes(searchKey) ||
        supplier.productCategory.includes(searchKey) 
        )
        this.setState({ supplier: result })
      }

      handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get("http://localhost:8070/Supplier").then(res => {
          if (res.data.success) {
            this.filterData(res.data.supplier, searchKey)
          }
    
        });
      }

      async generateReport() {
        const obj = { supplier: this.state.supplier }
        await axios.post('http://localhost:8070/generateSupplierReport', obj, { responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }, }).then((res) => {
          alert('Report Generated Successfully')
          console.log(res)
          console.log(res.data)
          const pdfBlog = new Blob([res.data], { type: 'application/pdf' });
          saveAs(pdfBlog, 'Suppliers.pdf');
          window.open(res.data, '_blank');
        }).catch((err) => {
          console.log(err.message)
        })
        console.log(obj)
      }
    
    

componentDidMount(){
    this.displaysupplier();
}

    render() {
        return (

            <>
            <IndexNavbar />
            <IndexHeader />
            
            <div style={{margin: '25px 50px 75px'}}>
            <div>
            <div>
                <div>
                    <br/>
                    <br/>
                        <center><h3><b>
                        Registerd All SSuppliers
                        </b></h3></center>
                </div>

        <div>
            
            <div align="center">
                <input  type="search"
                  placeholder="Serach" name="searchQuery" style={{  width: 25 + "%" }}/*startIcon={< SearchSharpIcon />}*/
                   onChange={this.handleSearchArea}>
                </input>   <br/><br/>
            </div>

            <div align="right">
                
                  
                  &nbsp;&nbsp;&nbsp;

                <button type="submit" style={{ background: "#737CA1", width: 33.5 + "%", align: "right",color: 'white' }}
                 /*startIcon={<InsertDriveFileIcon />}*/ onClick={this.generateReport}>
                  Generate Supplier Report</button>
            </div>
        </div>
        </div>
                  
                        <table className="table table-hover" style={{/*marginTop:'40px',*/ background: "#F0FFFF", margin: 'auto', marginBottom:'45px' ,marginTop: '45px'/*width: '1000px'*/ }} >
                            <thead>
                                <tr bgcolor="#D5D6EA">
                                <th scope="col">No</th>
                                <th scope="col">Company ID</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Contact No</th>
                                <th scope="col">Email</th>
                                <th scope="col">Product Category</th>
                                <th scope="col">Username</th>
                                
                                <th scope="col">Actions</th>

                                </tr>
                            </thead>  
                            <tbody>
                                {this.state.supplier.map((supplier,index)=>(
                                   <tr>
                                        <th scope = "row">{index +1}</th>
                                        <td>{supplier.companyID}</td>
                                        <td>{supplier.companyName}</td>
                                        <td>{supplier.address}</td>
                                        <td>{supplier.contactNo}</td>
                                        <td>{supplier.email}</td>
                                        <td>{supplier.productCategory}</td>
                                        <td>{supplier.username}</td>

                                        <td>
                                            <a href={`/update/${supplier._id}`}>
                                                <button style={{background:'#726D93', color: 'white'}} type="submit" >
                                                    Update
                                                </button>
                                            </a>
                                            <button style={{background:'#726D93', color: 'white'}} type="submit" onClick={()=>this.onDelete(supplier._id)} >
                                                Delete
                                            </button>
                                        </td>
                                        
                                    </tr>
                                   
                                ))}
                            </tbody>


                        </table>
                    </div>
             </div>
          
          <DarkFooter />
          </> 
        )
                             
    }
    
}

