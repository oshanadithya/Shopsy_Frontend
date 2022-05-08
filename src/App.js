import CreateDelivery from "./components/CreateDelivery";
import DeliveryDetails from "./components/DeliveryDetails";
import EditDelivery from "./components/EditDelivery";
import React, {Component} from "react";
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
// import NavBar from './components/NavBar';
import Complaints from './components/Complaints';
import AllComplaints from './components/AllComplaints';
import Report from './components/Report';
//import Index from './views/Index';


// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";


export default class App extends Component{
    render(){
        return(
            <BrowserRouter>
            
            <div className="container">
                {/* <NavBar/> */}
                {/* <Route path="/index" render={(props) => <Index {...props} />} /> */}
                <Route path="/" exact component={Home}></Route>
                <Route path="/add" component={CreateDelivery}></Route>
                <Route path="/edit/:id" component={EditDelivery}></Route>
                <Route path="/delivery/:id" component={DeliveryDetails}></Route>
                <Route path="/addc" component={Complaints}></Route>
                <Route path="/addcc" component={AllComplaints}></Route>
                <Route path="/rep" component={Report}></Route>
              

             </div>
            </BrowserRouter>
        )
    }
}