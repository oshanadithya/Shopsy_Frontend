// reactstrap components
import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

// core components
import {
  Input,
  Button
} from "reactstrap";

function ProductHistory () {

    const [products, setProducts] = useState([]);
    const [searchVal , setSearchVal] = useState("");

    useEffect(() => {
      function getProducts() {
          axios.get("http://localhost:8070/SellProduct/").then((res) => {
            setProducts(res.data);
            console.log(res);
          }).catch((err) => {
            alert("Something went wrong :(");
            alert(err.message);
          });
      };
        getProducts();
    },[]);


    const productDelete = (del) => {

      if (
        window.confirm(
          "Confirm to remove?"
        )
      )
      axios.delete(`http://localhost:8070/SellProduct/deleteProduct/${
       del._id}`
      )
      .then((res) =>{
          console.log(res);
          toast.success("Product Deleted!", {
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
      var number = 1;

      return (
        <div className = "container">
            <h3 style = {{marginLeft:"430px"}}><b>Sell Product History</b></h3>
            <Input placeholder="Search " type="text" 
            onChange = {(e) =>{
              setSearchVal(e.target.value);
            }}/>
            {
                products.filter((SellProduct) => {
                    let Name = SellProduct.pname;
                      if (searchVal === "") {
                        return SellProduct;
                      } else {
                        if (Name) {
                          if (
                            Name.toLowerCase().includes(searchVal.toLowerCase())
                          ) {
                            return SellProduct;
                          }
                        }
                      }
                })
                .map((SellProduct) => (
                    <div style = {{marginLeft:"20px"}}  className = "tableContainer">
                    <table className = "table table-striped">
                        <thead>
                        <th scope = "col"> No </th>
                            <th scope = "col"> Product Name </th>
                            <th scope = "col"> Company Name </th>
                            <th scope = "col"> Product ID </th>
                            <th scope = "col"> Product Price </th>
                            <th scope = "col"> Exp Date </th>
                            <th scope = "col"> Manufactured Date </th>
                            <th scope = "col"> Product Description </th>
                        </thead>
                        <tbody>
                        
                            <tr>
                            <th scope = "row">{number++}</th>
                            
                            <td>{SellProduct.pname}</td>

                            <td>{SellProduct.cname}</td>
                            
                            <td>{SellProduct.pid}</td>
                            
                            <td>{SellProduct.price}</td>
                            
                            <td>{SellProduct.expdate}</td>

                            <td>{SellProduct.mandate}</td>

                            <td>{SellProduct.desc}</td>

                            <td><Button color="warning"  style = {{padding: "5px 5px 5px 5px" , width : "60px" , marginBottom : "8px"}}
                                onClick = {()=>{
                                    history.push(`/update-product/${SellProduct._id}`);
                                }}
                                >Edit</Button>
            
                                <Button color="danger" style = {{padding: "5px 5px 5px 5px", width : "70px", marginBottom : "8px"}}
                                onClick = {() =>

                                        productDelete(SellProduct)
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
      )
}

export {
    ProductHistory
}