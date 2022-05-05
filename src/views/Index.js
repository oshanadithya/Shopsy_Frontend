import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

import {
  Container,
  CardColumns
 } from "reactstrap";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";

// dev implemented
import { ContactUS } from "./ContactUs.js";
import { Cart } from "./Cart.js";
import { Sellproduct } from "./SellProduct.js";
import LoginPage from "./examples/LoginPage.js";
 
function Index() {

  const [products, setProducts] = useState([]);
  const history = useHistory();

  const navigateTo = () => {
    history.push({
      pathname: "/cart",
    });
  };

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

  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Images />
          <Container>
          <h2 class="title-page">Customized Cart</h2>
            <CardColumns>

              <MDBCard style={{ maxWidth: '18rem' }}>
                <MDBCardImage src='http://s3.amazonaws.com/themorning-aruna/wp-content/uploads/2020/10/24213142/Supermarket-300x225.jpg' position='top' alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>{products.map((SellProduct) =>(<div>{SellProduct.cname}</div>))}</MDBCardTitle>
                  <MDBCardText>
                    {products.map((SellProduct) =>(<div>{SellProduct.pname}{SellProduct.price}{SellProduct.desc}</div>))}
                  </MDBCardText>
                  <MDBBtn onClick = {navigateTo}>Buy</MDBBtn>
                </MDBCardBody>
              </MDBCard>

          </CardColumns>
          </Container>
          <ContactUS />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
