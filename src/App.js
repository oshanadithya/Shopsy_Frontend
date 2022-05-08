import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import AddSupplier from './components/AddSupplier';
import SupplierProfile from './components/SupplierProfile';
import LoginPage from './components/SupplierLogin';

import Home from "./components/Home";
import Suppliers from "./components/Supplier/Suppliers";
import UpdateSupplier from "./components/UpdateSupplier";

function App(){
    return (
        <Router>            
            
            <Route path="/add" exact component={AddSupplier}></Route>
            <Route path="/login" exact component={LoginPage}></Route>
            <Route path="/profile" exact component={SupplierProfile}></Route>

            <Route path="/home" exact component={Home}></Route>
            <Route path="/" exact component={Suppliers}></Route>
            <Route path="/update/:id" exact component={UpdateSupplier}></Route>

        </Router>  
    );
}

export default App;