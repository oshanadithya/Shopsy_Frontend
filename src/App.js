import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Index from "views/Index.js";
import { ContactUS } from "views/ContactUs";
import { Cart } from "views/Cart";
import { Sellproduct } from "views/SellProduct";
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

// pages for this kit
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import { UpdateProduct } from "views/UpdateProduct";

import Signup from "views/Signup";
import UserAccount from "views/UserAccount";
import UpdateUser from "views/UpdateUser";
import { ReactSession } from "react-client-session";
import DeleteAccount from "views/DeleteAccount";
import PaymentDetails from "views/PaymentDetails";
import UpdatePaymentDetails from "views/UpdatePaymentDetails";
import BuyHistory from "views/BuyHistory";
function App() {

    useEffect(() => {
        ReactSession.setStoreType("localStorage");
      }, []);

      const [user, setuser] = useState({});

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/index" render={(props) => <Index {...props} />} />
                <Route
                path="/nucleo-icons"
                render={(props) => <NucleoIcons {...props} />}
                />
                <Route
                path="/landing-page"
                render={(props) => <LandingPage {...props} />}
                />
                
                <Route
                path="/account-managment"
                render={(props) => <UserAccount {...props} />}
                />
                

                <Route
                path="/sell-product"
                render={(props) => <Sellproduct {...props} />}
                />

                <Route path="/cart" exact>
                <Cart></Cart>
                </Route>

                
                <Route path="/signup" exact>
                <Signup></Signup>
                </Route>

                <Route path="/delete-account" exact>
                <DeleteAccount></DeleteAccount>
                </Route>

                

                <Route
                path="/login" exact>
                <LoginPage user={user} setuser={setuser}></LoginPage>
                </Route>

                <Route
                path="/edit-user" exact>
                <UpdateUser></UpdateUser>
                </Route>

                <Route
                path="/payment-details" exact>
                <PaymentDetails user={user}></PaymentDetails>
                </Route>

                <Route
                path="/payment-update" exact>
                <UpdatePaymentDetails></UpdatePaymentDetails>
                </Route>

                <Route
                path="/user-Report" exact>
                <BuyHistory user={user}></BuyHistory>
                </Route>



    

                <Route path="/contact-us" exact>
                <ContactUS></ContactUS>
                </Route>

                <Route path="/update-product/:id" exact>
                <UpdateProduct></UpdateProduct>
                </Route>

                <Redirect to="/index" />
                <Redirect from="/" to="/index" />

            </Switch>
        </BrowserRouter>
    );
}

export default App;
