import React, { Component } from "react";
import axios from "axios";
import compl from "../assets/img/compl.jpg";
import IndexHeader from "components/Headers/IndexHeader.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import demo from "../assets/demo/demo.css";

export default class Complaints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",
      complaintId: "",
      emailAddress: "",
      contactNo: "",
      Date: "",
      TypeOfComplaint: "",
      Complaint: "",
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {
      customerName,
      complaintId,
      emailAddress,
      contactNo,
      Date,
      TypeOfComplaint,
      Complaint,
    } = this.state;

    const data = {
      customerName: customerName,
      complaintId: complaintId,
      emailAddress: emailAddress,
      contactNo: Number(contactNo),
      Date: Date,
      TypeOfComplaint: TypeOfComplaint,
      Complaint: Complaint,
    };

    console.log(data);

    if (
      customerName == "" ||
      complaintId == "" ||
      emailAddress == "" ||
      contactNo == "" ||
      Date == "" ||
      TypeOfComplaint == "" ||
      Complaint == ""
    ) {
      alert("Fill all the Fields");
      return 0;
    } else if (contactNo.length < 10) {
      alert("Contact number should be  10 Characters");
      return 0;
    }

    axios.post("/complaints/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          customerName: "",
          complaintId:"",
          emailAddress: "",
          contactNo: "",
          Date: "",
          TypeOfComplaint: "",
          Complaint: "",
        });
      }
    });
  }

  handleSearchArea = (e)=>{
    console.log(e.currentTarget.value);
  }

  //  clearContent(){
  //     document.getElementById('result').innerHTML = '';
  // }
  render() {
    return (
      <>
        <IndexNavbar />
        <IndexHeader />

        {/* <div style={{ backgroundImage:
              "url(" + require("assets/img/header1.jpg") + ")"}} > */}
         {/* <div className="container">
           <div className="row">
             <div className="col-lg-9 mt-2 mb-2">
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
           </div>
           </div>      */}
        <div>
          {" "}
          <h5
            className=" mb-3 font-normal"
            style={{ fontFamily: "Franklin Gothic Medium", marginTop: "30px" }}
          >
            Customer Complaints
          </h5>
          <div
            className="card col-md-6 offset-md-1 "
            style={{ marginLeft: "280px", marginTop: "150px" }}
          >
            <img src={compl} alt="complaints" style={{ width: "100px" }}></img>
            <form
              className="form"
              style={{ marginTop: "20px", marginBottom: "1px" }}
            >
              <div className="form-inline" style={{ marginBottom: "15px" }}>
                <div className="col-sm-3">
                  <label style={{ marginBottom: "5px" }}>Customer Name</label>
                </div>
                <input
                  style={{ width: "400px" }}
                  className="form-control"
                  name="customerName"
                  placeholder="Enter Name"
                  value={this.state.customerName}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <div className="form-inline" style={{ marginBottom: "15px" }}>
                <div className="col-sm-3">
                  <label style={{ marginBottom: "5px" }}>Complaint ID</label>
                </div>
                <input
                  style={{ width: "400px" }}
                  className="form-control"
                  name="complaintId"
                  placeholder="C001"
                  value={this.state.complaintId}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <div className="form-inline" style={{ marginBottom: "15px" }}>
                <div className="col-sm-3">
                  <label>Email Address</label>
                </div>
                <input
                  type="email"
                  style={{ width: "400px" }}
                  className="form-control"
                  name="emailAddress"
                  placeholder="Enter Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Enter a valid email"
                  required
                  value={this.state.emailAddress}
                  onChange={this.handleInputChange}
                ></input>
                <br />
              </div>
              <div className="form-inline" style={{ marginBottom: "15px" }}>
                <div className="col-sm-3">
                  <label style={{ marginBottom: "5px" }}>Contact Number</label>
                </div>
                <input
                  type="tel"
                  style={{ width: "400px" }}
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  className="form-control"
                  name="contactNo"
                  value={this.state.contactNo}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-inline" style={{ marginBottom: "15px" }}>
                <div className="col-sm-3">
                  <label style={{ marginBottom: "5px" }}>Date</label>
                </div>
                <input
                  type="date"
                  style={{ width: "400px" }}
                  className="form-control"
                  name="Date"
                  placeholder="Choose Date"
                  value={this.state.Date}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-inline" style={{ marginBottom: "15px" }}>
                <div className="col-sm-3">
                  <label style={{ marginBottom: "5px" }}>
                    Type of Complaint
                  </label>
                </div>
                <select
                  id="order"
                  name="TypeOfComplaint"
                  value={this.state.TypeOfComplaint}
                  onChange={this.handleInputChange}
                  required
                >
                  <option style={{ width: "400px" }}>
                    {" "}
                    ---Choose Complaint Type---{" "}
                  </option>
                  <option value="Wait-time complaint">Wait-time complaint</option>
                  <option value="Delivery issues">Delivery issues</option>
                  <option value="Serial Complaints">Serial Complaints</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-inline" style={{ marginBottom: "15px" }}>
                <div className="col-sm-3">
                  <label style={{ marginBottom: "5px" }}>Complaint</label>
                </div>
                <textarea
                  className="form-control"
                  rows="5"
                  id="comment"
                  style={{ width: "400px" }}
                  name="Complaint"
                  placeholder="Type..."
                  value={this.state.Complaint}
                  onChange={this.handleInputChange}
                  required
                ></textarea>
              </div>
              <button
                className="btn btn-success"
                type="submit"
                style={{ marginTop: "15px", marginLeft: "270px" }}
                onClick={this.onSubmit}
              >
                <i className="far fa-check-square"></i>
                &nbsp;Submit &nbsp;
              </button>
              &nbsp;
              {/* <a className="btn btn-warning" href={`/edit/${delivery._id}`}>
                                         <i className="fas fa-edit"></i>&nbsp;Edit
                                     </a> */}
              {/* <div>
                        <p id="result"></p>
                            </div>
                            <button onClick={"clearContent()"}>clear</button> */}
            </form>
          </div>
        </div>
        <DarkFooter />
      </>
    );
  }
}
