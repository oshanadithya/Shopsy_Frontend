// reactstrap components
import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import styles from "../assets/css/ProfilePage.module.css"
import { jsPDF } from "jspdf";

import {
  Input,
  Row,
  Col,
  Button
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function BuyHistory () {

    const [products, setProducts] = useState([]);
    const [searchVal , setSearchVal] = useState("");

    useEffect(() => {
      function getHistory() {
          axios.get("http://localhost:8070/user-report/").then((res) => {
            setProducts(res.data);
            console.log(res);
          }).catch((err) => {
            alert("Something went wrong :(");
            alert(err.message);
          });
      };
        getHistory();
    },[]);


    const historyDelete = (del) => {

      if (
        window.confirm(
          "Confirm to remove?"
        )
      )
      axios.delete(`http://localhost:8070/user-report/delete-history/${del._id}`)
      .then((res) =>{
          console.log(res);
          toast.success("Record Deleted!", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });     
      }).catch((err) =>{
          console.log(err);
          alert(err);
          toast.error("Something went wrong :(", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 10000,
            hideProgressBar: false,
          });
      });
    }


      let history = useHistory();
      let doc;


      const downloadPDF = () => {
 
        doc = new jsPDF({
          orientation : "landscape",
          unit :"pt",
          format : [1700,1000]
        })
        doc.html(document.getElementById("report-cont"), {
          callback: function (pdf) {
            pdf.save("BuyReport.pdf");
          },
        });
      };


      var number = 1;

      return (
        <>
        <ExamplesNavbar />
        <div className="wrapper">

        <ProfilePageHeader />

<div id="report-cont" className = "container">
    <h3 style = {{marginLeft:"430px"}}><b>Buy History</b></h3>
    <Input placeholder="Search " type="text" 
    onChange = {(e) =>{
      setSearchVal(e.target.value);
    }}/>
    {
        products.filter((BuyHistory) => {
            let OrderName = BuyHistory.OrderName;
              if (searchVal === "") {
                return BuyHistory;
              } else {
                if (OrderName) {
                  if (
                    OrderName.toLowerCase().includes(searchVal.toLowerCase())
                  ) {
                    return BuyHistory;
                  }
                }
              }
        })
        .map((BuyHistory) => (
            <div style = {{marginLeft:"20px"}}  className = "tableContainer">
            <table className = "table table-striped">
                <thead>
                <th scope = "col"> No </th>
                    <th scope = "col"> OrderID </th>
                    <th scope = "col"> Customer Email </th>
                    <th scope = "col"> Order Name </th>
                    <th scope = "col"> Quantity </th>
                    <th scope = "col"> Price </th>
                    <th scope = "col"> Date </th>
          
                </thead>
                <tbody>
                
                    <tr>
                    <th scope = "row">{number++}</th>
                    
                    <td>{BuyHistory.OrderID}</td>

                    <td>{BuyHistory.CustomerEmail}</td>
                    
                    <td>{BuyHistory.OrderName}</td>
                    
                    <td>{BuyHistory.Quantity}</td>
                    
                    <td>{BuyHistory.Price}</td>

                    <td>{BuyHistory.Date}</td>

                    <td>

                        <Button color="danger" style = {{padding: "5px 5px 5px 5px", width : "70px", marginBottom : "8px"}}
                        onClick = {() =>

                          historyDelete(BuyHistory)
                        }
                        
                        >Remove</Button>
                        </td>
                        </tr>
                
                </tbody>
            </table>
            </div> 
        ))
    }
</div>

<div className="report-download">
              <Row>
                <Col>
                  <button
                    className="btn btn-info"
                    onClick={downloadPDF}
                  >
                    Download PDF
                  </button>
                </Col>
              </Row>
          </div>

        </div>
        <DefaultFooter />
        
        </>
      )
}

export default BuyHistory;