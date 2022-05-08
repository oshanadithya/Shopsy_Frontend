import{Button} from 'reactstrap'
import{ useHistory } from "react-router-dom"
import { jsPDF } from "jspdf";
import { useEffect } from "react/cjs/react.development";
import { useState } from 'react';


import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import { ReactSession } from "react-client-session";
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {
    Label,
    Input,
    Row,
    Col,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormGroup,
    Card,
    Alert,
    Container,
  } from "reactstrap";

toast.configure();

function BuyHistory({}) {

    let history = useHistory();
    const [user, setuser] = useState();
    let doc;

    const [BuyHistory , setBuyHistory] = useState([]);
    const [searchVal , setSearchVal] = useState("");

    useEffect(() => {


        ReactSession.setStoreType("localstorage");
        if (ReactSession.get("user") === null) {
          history.push({
            pathname: "/login",
          });
        }
  
        else {


        axios.get('http://localhost:8070/users/report').then((res) =>{
          setBuyHistory(res.data);
            console.log(res.data);
        }).catch((err) =>{
            console.log(err);
        })
    };
    
      }, []);

      var number = 1;

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
      
 return (
     <>
     <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        < br/>
        < br/>
            <h3 ><center>Buy Report</center></h3><br/><br/>
   

    <Container>
<br/><br/>
<div style = {{marginLeft : "40px" , marginRight : "40px" }}>
<div style = {{display : "flex" , flexDirection : "row" }}>
<div style = {{width : "30%" }}>

        </div>

</div>
<Col>
    <FormGroup>
      <InputGroup style = {{marginLeft : "70px"}} className="form-group-no-border">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="nc-icon nc-zoom-split" />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Search " type="text" 
            onChange = {(e) =>{
                        setSearchVal(e.target.value);
            }}/>
      </InputGroup>
    </FormGroup>
  </Col>
<hr></hr>

<div id ="report-cont" >
        <Card className="" id="report" style = {{padding : "20px"}}>
            <Row>
              <Col>
                {"../assets/img/shopsy.png "}
                <img
                  style = {{width : "30%" , marginLeft : "35%" }}
                  src={
                    require().default
                  }
                  className="report-logo"
                />
              </Col>
            </Row>
           
            <br/><br/>

            <div style = {{marginLeft:"20px"}}  className = "tableContainer">
        <table className = "table">
            <thead>
            <th scope = "col">#</th>
                <th scope = "col">Order ID</th>
                <th scope = "col">Order Name</th>
                <th scope = "col">Quantity</th>
                <th scope = "col">Date</th>
                <th scope = "col">Price</th>
            </thead>

            <tbody>
                
                {BuyHistory.filter((val) =>{
                    if(searchVal === ''){
                      return val;
                    }
                    else if (val.fullName.toLowerCase().includes(searchVal.toLowerCase())){
                      return val;
                    }
                    else if (val.insurance.toLowerCase().includes(searchVal.toLowerCase())){
                      return val;
                    }
    

                }).map((BuyHistory)=>(
                        <tr>
                       <th scope = "row">{number++}</th>
                        <td>{BuyHistory.OrderID}</td>
                        <td>{BuyHistory.OrderName}</td>
                        <td>{BuyHistory.Quantity}</td>
                        <td>{BuyHistory.Date}</td>
                        <td>{BuyHistory.Price}</td>
                        </tr>

                  ))}
            </tbody>    


        </table>
    </div>  
  </Card> 
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

</Container>


    </div>
    
    <DefaultFooter />    



</>
    
);


}
export default BuyHistory;