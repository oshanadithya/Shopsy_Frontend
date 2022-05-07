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

import LandingPage from "views/examples/LandingPage.js";
import Userdashboard from "views/examples/Userdashboard.js";
import SignUp from "views/Signup.js";
import UserAccount from "views/UserAccount";
import Edituserform from "views/Edituserform";
import { ReactSession } from "react-client-session";
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
                path="/user-dashboard"
                render={(props) => <Userdashboard {...props} />}
                />
                <Route
                path="/account-managment"
                render={(props) => <UserAccount {...props} />}
                />
                <Route
                path="/edit-details"
                render={(props) => <Edituserform {...props} />}
                />

                <Route
                path="/signup"
                render={(props) => <SignUp {...props} />}
                />

                <Route
                path="/login"
                render={(props) => <loginPage user={user} setuser={setuser} {...props} />}
                />
                
                <Redirect to="/index" />
                <Redirect from="/" to="/index" />

                <Route path="/cart" exact>
                <Cart></Cart>
                </Route>

                <Route path="/sell-product" exact>
                <Sellproduct></Sellproduct>
                </Route>

                <Route path="/contact-us" exact>
                <ContactUS></ContactUS>
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default App;
