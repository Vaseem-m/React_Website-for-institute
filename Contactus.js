import React from "react";
import Layout from "./Layout";

class Contactus extends React.Component {
    render() {
        return (

            <Layout>
               
                <div className="enqform1">
                <h3 id="cntdet">Contact Details</h3>
                <div id="label"><b>Website:</b></div><div id="cont">Abcxyz@pqr.com</div> <br></br>
                <div id="label"><b>Phone No:</b></div><div id="cont"> +91 9765313661</div><br></br>
                <div id="label"><b>Email ID:</b></div><div id="cont"> qwert@pqr.com</div><br></br>
                <div id="label"><b>Facebook:</b></div><div id="cont"> Facebook.com</div><br></br>
                <div id="label"><b>Twitter:</b></div><div id="cont"> Twitter.com</div><br></br>
                </div>
            </Layout>
        )
    }
}

export default Contactus;