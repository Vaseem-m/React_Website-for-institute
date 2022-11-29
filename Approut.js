import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contactus from "./Contactus";
import Courselist from "./Courselist";
import Enquiry from "./Enquiry";
import Notfound from "./Notfound";

const Approut=()=>{
    return<BrowserRouter>
    <Switch>
        <Route path="/" component={Courselist} exact/>
        <Route path="/Contactus" component={Contactus} exact/>
        <Route path="/Enquiry" component={Enquiry} exact/>
        <Route component={Notfound} exact/>
    </Switch>
    </BrowserRouter>
}

export default Approut;