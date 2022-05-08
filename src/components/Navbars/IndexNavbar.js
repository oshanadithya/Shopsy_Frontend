import React from "react";
import { Link, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {

  const history = useHistory();

  const navigateTo = () => {
    history.push({
      pathname: "/cart",
    });
  };

  const navigateToIndex = () => {
    history.push({
      pathname: "/Index",
    });
  };

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="src/Index.js"
              target="_blank"
              id="navbar-brand"
            >
              Shopsy
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Coded by Tech Phantoms
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  /*onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}*/
                  onClick = {navigateToIndex}
                >
                  <i className=""></i>
                  <p>Shop</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className=""></i>
                  <HashLink smooth to="/#elem1"></HashLink>
                  <p>Contact Us</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className=""></i>
                  <p>About Us</p>
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className=""></i>
                  <p>All Categories</p>
                  <p>Companies</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className=""></i>
                    Malibun
                  </DropdownItem>
                  <DropdownItem
                    href="https://"
                    target="_blank"
                  >
                    <i className=""></i>
                    Softlogic
                  </DropdownItem>
                  <DropdownItem
                    href="https://"
                    target="_blank"
                  >
                    <i className=""></i>
                    Abans
                  </DropdownItem>
                  <DropdownItem
                    href="https://"
                    target="_blank"
                  >
                    <i className=""></i>
                    Singer
                  </DropdownItem>
                  <DropdownItem
                    href="https://"
                    target="_blank"
                  >
                    <i className=""></i>
                    CBL
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className=""></i>
                  <p>Deliveries</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/" tag={Link}>
                    <i className=""></i>
                    Delivery Details
                  </DropdownItem>
                  <DropdownItem
                    href="./components/DeliveryDetails.js"
                    target="_blank"
                  >
                    <i className=""></i>
                   Add New Delivery Details
                  </DropdownItem>
                  <DropdownItem
                    href="./components/CreateDelivery.js"
                    target="_blank"
                  >
                    <i className=""></i>

                  </DropdownItem>
                  <DropdownItem to="/rep" tag={Link}>
                    <i className=""></i>
                  Delivery Report
                  </DropdownItem>
                  <DropdownItem
                    href="./components/Complaints.js"
                    target="_blank"
                  >

                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>


              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className=""></i>
                  <p>Products</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className=""></i>
                    Electronic Devices
                  </DropdownItem>
                  <DropdownItem
                    href="https://"
                    target="_blank"
                  >
                    <i className=""></i>
                    Pharmetical Items
                  </DropdownItem>
                  <DropdownItem
                    href="https://"
                    target="_blank"
                  >
                    <i className=""></i>
                    Daily Essentials
                  </DropdownItem>
                  <DropdownItem
                    href="https://"
                    target="_blank"
                  >
                    <i className=""></i>
                    Liquor
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className=""></i>
                  <p>Customer Complaints</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/addc" tag={Link}>
                    <i className=""></i>
                    Customer Complaints
                  </DropdownItem>
                  <DropdownItem
                    href="./components/Complaints.js"
                    target="_blank"

                  >
                    <i className=""></i>

                  </DropdownItem>




                  <DropdownItem to="/addcc" tag={Link}>
                    <i className=""></i>
                    All Complaints
                  </DropdownItem>
                  <DropdownItem
                    href="./components/AllComplaints.js"
                    target="_blank"

                  >
                    <i className=""></i>

                  </DropdownItem>

                </DropdownMenu>

              </UncontrolledDropdown>




              <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
