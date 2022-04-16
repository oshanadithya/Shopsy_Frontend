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
import ProfilePage from "views/examples/ProfilePage.js";

function App() {

    /*useEffect(() => {
        ReactSession.setStoreType("localStorage");
      }, []);

      const [user, setuser] = useState({});*/

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
                path="/profile-page"
                render={(props) => <ProfilePage {...props} />}
                />
                <Route
                path="/login-page"
                render={(props) => <LoginPage {...props} />}
                />

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